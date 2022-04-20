using Application.DTOs;

namespace Application.Interfaces;

public interface ICategoryService
{
    Task<IEnumerable<CategoryDTO>> GetCategoriesAsync();
    Task<CategoryDTO> GetByIdAsync(int? id);
    Task Add(CategoryDTO categoryDto);
    Task Update(CategoryDTO categoryDto);
    Task Delete(int? id);
}