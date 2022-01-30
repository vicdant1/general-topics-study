namespace EFCoreRelationsStudying.Models
{
    public class Product
    {
        public int Id { get; set; }
        public Brick Brick { get; set; } = new();
    }
}
