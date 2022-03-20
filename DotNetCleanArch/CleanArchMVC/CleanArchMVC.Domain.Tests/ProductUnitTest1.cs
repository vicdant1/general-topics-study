using CleanArchMVC.Domain.Entities;
using FluentAssertions;
using System;
using Xunit;

namespace CleanArchMVC.Domain.Tests
{
    public class ProductUnitTest1
    {
        [Fact(DisplayName = "CreateProductWithValidState")]
        public void CreateProduct_WithValidParameters_ResultObjectValidState()
        {
            Action action = () => new Product("Product name", "Description", 33.2m, 13, "imagepath");

            action.Should().NotThrow<Validation.DomainExceptionValidation>();
        }
        
        [Fact(DisplayName = "CreateProductWithNegativeId")]
        public void CreateProduct_WithNegativeId_DomainExceptionInvalidId()
        {
            Action action = () => new Product(-1, "Product name", "Description", 33.2m, 13, "imagepath");

            action.Should()
                  .Throw<Validation.DomainExceptionValidation>()
                  .WithMessage("Invalid Id");
        }

        
        [Fact(DisplayName = "CreateProductWithShortNameValue")]
        public void CreateProduct_WithShortNameValue_DomainExceptionTooShortName()
        {
            Action action = () => new Product("Pr", "Description", 33.2m, 13, "imagepath");

            action.Should()
                  .Throw<Validation.DomainExceptionValidation>()
                  .WithMessage("Name should have at least 3 letters");
        }

        [Fact(DisplayName = "CreateProduct_TooLongImageName_DomainExceptionTooLongName")]
        public void CreateProduct_WithTooLongImageName_DomainExceptionTooLongName()
        {
            Action action = () => new Product(1, "Product name", "Description", 33.2m, 13, 
                @"toooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo
                  loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong
                  naaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaame");

            action.Should()
                  .Throw<Validation.DomainExceptionValidation>()
                  .WithMessage("Too long image name, maximum 250 characters");
        }

        [Fact]
        public void CreateProduct_WithNullImageName_DomainExceptionTooLongName()
        {
            Action action = () => new Product(1, "Product name", "Description", 33.2m, 13, null);

            action.Should()
                  .NotThrow<Validation.DomainExceptionValidation>();
        }

        [Fact]
        public void CreateProduct_WithNullImageName_NoNullReferenceException()
        {
            Action action = () => new Product(1, "Product name", "Description", 33.2m, 13, null);

            action.Should()
                  .NotThrow<NullReferenceException>();
        }

        [Fact]
        public void CreateProduct_WithEmptyImageName_DomainExceptionTooLongName()
        {
            Action action = () => new Product("Product name", "Description", 33.2m, 13, "");

            action.Should()
                  .NotThrow<Validation.DomainExceptionValidation>();
        }

        [Theory]
        [InlineData(-5)]
        public void CreateProduct_InvalidStockValue_ExceptionDomainNegativeValue(int stockCount)
        {
            Action action = () => new Product("Product name", "ProductDescription", 24.3m, stockCount, "imagepath");
            action.Should()
                  .Throw<Validation.DomainExceptionValidation>()
                  .WithMessage("Invalid stock value");
        }

        [Fact]
        public void CreateProduct_InvalidPriceValue_ExceptionDomainNegativeValue()
        {
            Action action = () => new Product("Product name", "ProductDescription", -24.3m, 123, "imagepath");
            action.Should()
                  .Throw<Validation.DomainExceptionValidation>()
                  .WithMessage("Invalid price value");
        }
    }
}
