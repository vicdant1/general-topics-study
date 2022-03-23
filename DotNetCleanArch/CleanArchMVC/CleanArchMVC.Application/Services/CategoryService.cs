using AutoMapper;
using CleanArchMVC.Application.DTOs;
using CleanArchMVC.Application.Interfaces;
using CleanArchMVC.Domain.Entities;
using CleanArchMVC.Domain.Interfaces;

namespace CleanArchMVC.Application.Services
{
    public class CategoryService : ICategoryService
    {
        private readonly IMapper _mapper;
        private readonly ICategoryRepository _categoryRepository;

        public CategoryService(IMapper mapper, ICategoryRepository categoryRepository)
        {
            _mapper = mapper;
            _categoryRepository = categoryRepository;
        }
        public async Task Add(CategoryDTO categoryDto)
        {
            var category = _mapper.Map<Category>(categoryDto);
            await _categoryRepository.CreateAsync(category);
        }

        public async Task Delete(int? id)
        {
            var category = await _categoryRepository.GetByIdAsync(id);
            await _categoryRepository.RemoveAsync(category);
        }

        public async Task<CategoryDTO> GetById(int? id)
        {
            var category = await _categoryRepository.GetByIdAsync(id);
            return _mapper.Map<CategoryDTO>(category);
        }

        public async Task<IEnumerable<CategoryDTO>> GetCategories()
        {
            var categories = await _categoryRepository.GetCategoriesAsync();
            return _mapper.Map<IEnumerable<CategoryDTO>>(categories);
        }

        public async Task Update(CategoryDTO categoryDto)
        {
            var category = _mapper.Map<Category>(categoryDto);
            await _categoryRepository.UpdateAsync(category);
        }
    }
}
