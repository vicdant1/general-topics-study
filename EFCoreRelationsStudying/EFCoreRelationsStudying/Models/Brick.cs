
using EFCoreRelationsStudying.Enums;
using System.ComponentModel.DataAnnotations;

namespace EFCoreRelationsStudying.Models
{
    public class Brick
    {
        // just because it is "id", ef will turn it into a pk of this table
        public int Id { get; set; }
        [MaxLength(250)]
        public string Title { get; set; } = string.Empty;
        public Color? Color { get; set; }
        public List<Tag> Tags { get; set; }

    }
}
