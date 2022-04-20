using Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infra.Data.EntitiesConfiguration;

public class CategoryConfiguration : IEntityTypeConfiguration<Category>
{
    public void Configure(EntityTypeBuilder<Category> builder)
    {
        builder.HasKey(c => c.Id);
        builder.Property(p => p.Name).HasMaxLength(100).IsRequired();

        builder.HasData(
            new Category(1, "Material Escolar"),
            new Category(2, "Eletrônicos"),
            new Category(3, "Acessórios")
        );
    }
}