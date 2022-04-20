using System.ComponentModel.DataAnnotations;

namespace Application.DTOs;

public class CategoryDTO
{
    public int Id { get; set; }
    [Required(ErrorMessage = "The name is a required field")]
    [MinLength(3)]
    [MaxLength(100)]
    public string Name { get; set; }
}