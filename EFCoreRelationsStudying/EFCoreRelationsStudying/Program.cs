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
    var objectQuery = await context.BrickAvailabilities.ToArrayAsync();
}