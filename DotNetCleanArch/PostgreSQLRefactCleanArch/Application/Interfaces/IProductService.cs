using Application.DTOs;

namespace Application.Interfaces;

public interface IProductService
{
    Task<IEnumerable<ProductDTO>> GetProducts();
    Task<ProductDTO> GetById(int? id);
    Task<ProductDTO> GetProductCategory(int? id);

    Task Add(ProductDTO productDTO);
    Task Update(ProductDTO productDTO);
    Task Delete(int? id);
}