using EFCoreRelationsStudying.Models;
using Microsoft.EntityFrameworkCore;

using EFCoreRelationsStudying.Data;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;

namespace EFCoreRelationsStudying.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> opt) : base(opt)
        { }

        public DbSet<Brick> Bricks { get; set; }
        public DbSet<Vendor> Vendors { get; set; }
        public DbSet<BrickAvailability> BrickAvailabilities { get; set; }
        public DbSet<Tag> Tags { get; set; }


        // OnModelCreating is a function that initialize all of boring stuff in migrations, btw, we can override this method to make the same as dataannotations does in the models or configure some special feature.

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //working on inheritance -> telling up to EF that a model derives from another one
            modelBuilder.Entity<BasePlate>().HasBaseType<Brick>();
            modelBuilder.Entity<MinifigHead>().HasBaseType<Brick>();
        }

    }
}


public class BrickContextFactory : IDesignTimeDbContextFactory<AppDbContext>
{
    public AppDbContext CreateDbContext(string[] args = null)
    {
        var configuration = new ConfigurationBuilder().AddJsonFile("appsettings.json").Build();

        var optionsBuilder = new DbContextOptionsBuilder<AppDbContext>();

        optionsBuilder
            .UseSqlServer(configuration.GetConnectionString("defaultSqlServer"))
            .UseLoggerFactory(LoggerFactory.Create(builder => builder.AddConsole()));

        return new AppDbContext(optionsBuilder.Options);
    }
}