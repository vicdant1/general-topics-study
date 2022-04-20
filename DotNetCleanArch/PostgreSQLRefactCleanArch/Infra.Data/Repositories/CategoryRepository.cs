using Domain.Entities;
using Domain.Interfaces;
using Infra.Data.Context;
using Microsoft.EntityFrameworkCore;

namespace Infra.Data.Repositories;

public class CategoryRepository : ICategoryRepository
{
    private readonly AppDbContext _dbContext;

    public CategoryRepository(AppDbContext dbContext)
    {
        _dbContext = dbContext;
    }
    
    public async Task<IEnumerable<Category>> GetCategoriesAsync() 
        => await _dbContext.Categories.ToListAsync();

    public async Task<Category> GetByIdAsync(int? id)
        => await _dbContext.Categories.FindAsync(id);

    public async Task<Category> CreateAsync(Category category)
    {
        _dbContext.Add(category);
        await _dbContext.SaveChangesAsync();
        return category;
    }

    public async Task<Category> UpdateAsync(Category category)
    {
        _dbContext.Update(category);
        await _dbContext.SaveChangesAsync();
        return category;
    }

    public async Task<Category> RemoveAsync(Category category)
    {
        _dbContext.Remove(category);
        await _dbContext.SaveChangesAsync();
        return category;
    }
}