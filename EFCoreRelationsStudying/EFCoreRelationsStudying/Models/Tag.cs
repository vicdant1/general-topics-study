using System.ComponentModel.DataAnnotations;

namespace EFCoreRelationsStudying.Models
{
    public class Tag
    {
        // just because it is "id", ef will turn it into a pk of this table
        public int Id { get; set; }
        [MaxLength(250)]
        public string Title { get; set; } = string.Empty;
    }
}
