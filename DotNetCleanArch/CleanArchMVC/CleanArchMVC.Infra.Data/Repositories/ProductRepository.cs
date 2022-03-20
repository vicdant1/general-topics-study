using CleanArchMVC.Domain.Entities;
using CleanArchMVC.Domain.Interfaces;
using CleanArchMVC.Infra.Data.Context;
using Microsoft.EntityFrameworkCore;

namespace CleanArchMVC.Infra.Data.Repositories
{
    public class ProductRepository : IProductRepository
    {
        ApplicationDbContext _appDbContext;
        public ProductRepository(ApplicationDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        public async Task<Product> CreateAsync(Product product)
        {
            _appDbContext.Add(product);
            await _appDbContext.SaveChangesAsync();

            return product;
        }

        public async Task<Product> GetByIdAsync(int? id) => await _appDbContext.Products.FindAsync(id);

        public async Task<Product> GetProductCategoryAsync(int? id)
            => await _appDbContext.Products.Include(p => p.Category).FirstOrDefaultAsync(p => p.Id == id);

        public async Task<IEnumerable<Product>> GetProductsAsync() => await _appDbContext.Products.ToListAsync();

        public async Task<Product> RemoveAsync(Product product)
        {
            _appDbContext.Remove(product);
            await _appDbContext.SaveChangesAsync();

            return product;
        }
        public async Task<Product> UpdateAsync(Product product)
        {
            _appDbContext.Update(product);
            await _appDbContext.SaveChangesAsync();

            return product;
        }
    }
}