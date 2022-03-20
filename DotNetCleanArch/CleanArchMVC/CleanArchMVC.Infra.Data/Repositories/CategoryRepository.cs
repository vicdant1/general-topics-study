using CleanArchMVC.Domain.Entities;
using CleanArchMVC.Domain.Interfaces;
using CleanArchMVC.Infra.Data.Context;
using Microsoft.EntityFrameworkCore;

namespace CleanArchMVC.Infra.Data.Repositories
{
    public class CategoryRepository : ICategoryRepository
    {
        ApplicationDbContext _appDbContext;
        public CategoryRepository(ApplicationDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        public async Task<Category> CreateAsync(Category category)
        {
            _appDbContext.Add(category);
            await _appDbContext.SaveChangesAsync();

            return category;
        }

        public async Task<Category> GetByIdAsync(int? id) => await _appDbContext.Categories.FindAsync(id);

        public async Task<IEnumerable<Category>> GetCategoriesAsync() => await _appDbContext.Categories.ToListAsync();

        public async Task<Category> RemoveAsync(Category category)
        {
            _appDbContext.Remove(category);
            await _appDbContext.SaveChangesAsync();

            return category;
        }

        public async Task<Category> UpdateAsync(Category category)
        {
            _appDbContext.Update(category);
            await _appDbContext.SaveChangesAsync();

            return category;
        }
    }
}
