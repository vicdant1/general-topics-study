using Domain.Entities;
using Domain.Interfaces;
using Infra.Data.Context;
using Microsoft.EntityFrameworkCore;

namespace Infra.Data.Repositories;

public class ProductRepository : IProductRepository
{
    private readonly AppDbContext _dbContext;

    public ProductRepository(AppDbContext dbContext)
    {
        _dbContext = dbContext;
    }
    
    public async Task<IEnumerable<Product>> GetProductsAsync() 
        => await _dbContext.Products.ToListAsync();

    public async Task<Product> GetByIdAsync(int? id) 
        => await _dbContext.Products.FindAsync(id);

    public async Task<Product> GetProductCategoryAsync(int? id)
        => await _dbContext.Products.Include(p => p.Category)
                                    .FirstOrDefaultAsync(p => p.Id == id);

    public async Task<Product> CreateAsync(Product product)
    {
        _dbContext.Add(product);
        await _dbContext.SaveChangesAsync();
        return product;
    }

    public async Task<Product> UpdateAsync(Product product)
    {
        _dbContext.Update(product);
        await _dbContext.SaveChangesAsync();
        return product;
    }

    public async Task<Product> RemoveAsync(Product product)
    {
        _dbContext.Remove(product);
        await _dbContext.SaveChangesAsync();
        return product;
    }
}