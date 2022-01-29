using System.ComponentModel.DataAnnotations;

namespace EFCoreRelationsStudying.Models
{
    public class Vendor
    {
        // a vendor can sell multiple blocks, a block can be selled by multiple vendors, why dont use the usual many-to-many pattern?

        public int Id { get; set; }
        [MaxLength(250)]
        public string Name { get; set; } = string.Empty;

        public List<BrickAvailability> Availability { get; set; } = new();

    }
}
