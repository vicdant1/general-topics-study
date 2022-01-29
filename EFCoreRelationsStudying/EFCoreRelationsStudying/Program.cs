using EFCoreRelationsStudying.Enums;
using EFCoreRelationsStudying.Models;
using Microsoft.EntityFrameworkCore;

var factory = new BrickContextFactory();
using var context = factory.CreateDbContext();

//await AddData();
await QueryData();
Console.WriteLine("Done");

async Task AddData()
{
    Vendor brickKing, heldDerSteine;

    await context.AddRangeAsync(new[]
    {
        brickKing = new Vendor() { Name = "BrickKing" },
        heldDerSteine = new Vendor() { Name = "Held Der Steine" },
    });

    await context.SaveChangesAsync();

    Tag rare, ninjago, minecraft;

    await context.AddRangeAsync(new[]
    {
        rare = new Tag() { Title = "Rare"},
        ninjago = new Tag() { Title = "Ninjago"},
        minecraft = new Tag() { Title = "Minecraft"},
    });

    await context.SaveChangesAsync();

    await context.AddAsync(new BasePlate
    {
        Title = "Baseplate 16x16 blue water pattern",
        Color = Color.Green,
        Tags = new() { rare, minecraft },
        Length = 16,
        Width = 16,
        Availability = new()
        {
            new () { Vendor = brickKing, AvailableAmount = 5, PriceEur = 6.5m },
            new () { Vendor = heldDerSteine, AvailableAmount = 10, PriceEur = 5.9m },

        }
    });

    await context.AddAsync(new MinifigHead
    {
        Title = "Minifig brick",
        Color = Color.Red,
        IsDualSided = true,
        Tags = { rare, ninjago },
        Availability =
        {
            new() { Vendor = { Name = "John"}, AvailableAmount = 3, PriceEur = 8.5m},
            new() { Vendor = { Name = "Heisenberg"}, AvailableAmount = 10, PriceEur = 10.2m }
        }
    });

    await context.SaveChangesAsync();
}

async Task QueryData()
{
    var availableBricksData = await context.BrickAvailabilities
                                           .Include(ba => ba.Vendor)
                                           .Include(ba => ba.Brick)
                                           .ToArrayAsync();

    foreach(var availableBrick in availableBricksData)
    {
        Console.WriteLine($"Brick {availableBrick.Brick.Title} available at {availableBrick.Vendor.Name} for EU$ {availableBrick.PriceEur}");
    }


    Console.WriteLine("");

    // get a list of all bricks with the vendors and the tags 

    var brickVendorsTags = await context.Bricks
                                  .Include(b => b.Tags)
                                  //-> when i have where, i don't need to specify a include statement, ef understands that the relation will bring this data
                                  //.Where(b => b.Color == Color.Red)
                                  .Include(b => b.Availability)
                                  .ToArrayAsync();

    foreach (var brick in brickVendorsTags)
    {
        Console.WriteLine($"Brick: {brick.Title} {(brick.Tags.Any() ? string.Join(", ", brick.Tags.Select(t => t.Title)) : "")}");
    }

}