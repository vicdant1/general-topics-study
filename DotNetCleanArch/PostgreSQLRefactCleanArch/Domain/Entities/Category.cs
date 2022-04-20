namespace Domain.Entities;

public class Category : BaseEntity
{
    public string Name { get; private set; }
    public ICollection<Product> Products { get; private set; }

    public Category(int id, string name)
    {
        this.Id = id;
        this.Name = name;
    }
    
}   