using CleanArchMVC.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace CleanArchMVC.Infra.Data.EntitiesConfiguration
{
    public class CategoryConfiguration : IEntityTypeConfiguration<Category>
    {
        public void Configure(EntityTypeBuilder<Category> builder)
        {
            builder.HasKey(t => t.Id);
            builder.Property(p => p.Name).HasMaxLength(100).IsRequired();

            builder.HasData(
                new Category(1, "Material Escolar"),
                new Category(2, "Eletrônicos"),
                new Category(3, "Acessórios")
            );
        }
    }

    /*
    
    Example of creating basemap class, in bigger applications it could be useful.

    public class BaseMap<T> : IEntityTypeConfiguration<T> where T : EntityBase
    {
        string _tableName;
        public BaseMap(string tableName)
        {
            _tableName = tableName;
        }

        public virtual void Configure(EntityTypeBuilder<T> builder)
        {
            builder.HasKey(t => t.Id);
            builder.ToTable(_tableName);
        }
    }

    public class CategoryConfigurationExample : BaseMap<Category>
    {
        public CategoryConfigurationExample(string tableName) : base(tableName) { }

        public override void Configure(EntityTypeBuilder<Category> builder)
        {
            base.Configure(builder);

            builder.Property(c => c.Name).HasColumnName("nAmEtOtAbLe");
        }
    }
    */
}
