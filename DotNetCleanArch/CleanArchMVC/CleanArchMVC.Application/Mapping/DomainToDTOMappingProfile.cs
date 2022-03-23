using AutoMapper;
using CleanArchMVC.Application.DTOs;
using CleanArchMVC.Domain.Entities;

namespace CleanArchMVC.Application.Mapping
{
    public class DomainToDTOMappingProfile : Profile
    {
        public DomainToDTOMappingProfile()
        {
            CreateMap<Category, CategoryDTO>().ReverseMap();
            CreateMap<Product, ProductDTO>().ReverseMap();
        }
    }
}
