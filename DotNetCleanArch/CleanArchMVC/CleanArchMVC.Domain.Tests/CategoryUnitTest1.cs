using CleanArchMVC.Domain.Entities;
using FluentAssertions;
using System;
using Xunit;

namespace CleanArchMVC.Domain.Tests
{
    public class CategoryUnitTest1
    {
        [Fact(DisplayName = "CreateCategoryWithValidState")]
        public void CreateCategory_WithValidParameters_ResultObjectValidState()
        {
            Action action = () => new Category(1, "Category Name");

            action.Should().NotThrow<Validation.DomainExceptionValidation>();

        }

        [Fact(DisplayName = "CreateCategoryWithNegativeId")]
        public void CreateCategory_WithNegativeId_DomainExceptionInvalidId()
        {
            Action action = () => new Category(-1, "Category Name");

            action.Should()
                  .Throw<Validation.DomainExceptionValidation>()
                  .WithMessage("Invalid Id");

        }

        [Fact(DisplayName = "CreateCategoryWithShortNameValue")]
        public void CreateCategory_WithShortNameValue_DomainExceptionTooShortName()
        {
            Action action = () => new Category(1, "Ca");

            action.Should()
                  .Throw<Validation.DomainExceptionValidation>()
                  .WithMessage("Name should have at least 3 letters");
        }

        [Fact(DisplayName = "CreateCategoryWithMissingNameValue")]
        public void CreateCategory_WithMissingNameValue_DomainExceptionRequiredName()
        {
            Action action = () => new Category(1, "");

            action.Should()
                  .Throw<Validation.DomainExceptionValidation>()
                  .WithMessage("Name is required");
        }

        [Fact(DisplayName = "CreateCategoryWithNullNameValue")]
        public void CreateCategory_WithNullNameValue_DomainExceptionRequiredName()
        {
            Action action = () => new Category(1, null);

            action.Should()
                  .Throw<Validation.DomainExceptionValidation>();
        }
    }
}