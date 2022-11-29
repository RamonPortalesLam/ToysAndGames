using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Moq;
using Newtonsoft.Json.Linq;
using System.Xml.Linq;
using ToysAndGames.API.Controllers;
using ToysAndGames.Entities;
using ToysAndGames.Interfaces;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory.Database;

namespace ToysAndGames.NUnit
{
    [TestFixture]
    public class ProductNUnitTest
    {
        private IProductRepository _repository;
        public Mock<IProductRepository> _mockRepository = new Mock<IProductRepository>();
        public Mock<ILogger<ProductsController>> _mockLogger= new Mock<ILogger<ProductsController>>();
        private ProductsController _controller;

        [SetUp]
        public void Setup()
        {
             _controller = new ProductsController(_mockLogger.Object,_mockRepository.Object);
            _repository = _mockRepository.Object; //new ProductMockRepository();
        }

        [Test]
        public void TestAdd()
        {
            this._mockRepository.Setup(x => x.Add(new Entities.Product
            {
                AgeRestriction = 10,
                Company = "C",
                Description = "Foo",
                Id = 1,
                Name = "Foo GG",
                Price = 200
            })).Returns(true);

            var result =  _controller.Add(new Entities.Product
            {
                AgeRestriction = 10,
                Company = "C",
                Description = "Foo",
                Id = 1,
                Name = "Foo GG",
                Price = 200
            });
            Assert.AreEqual(typeof(OkObjectResult),result.GetType());
            

        }

        [Test]
        public void TestUpdate()
        {
            this._mockRepository.Setup(x => x.Update(new Entities.Product
            {
                AgeRestriction = 10,
                Company = "C",
                Description = "Foo",
                Id = 1,
                Name = "Foo GG",
                Price = 200
            })).Returns(true);

            var result = _controller.Update(new Entities.Product
            {
                AgeRestriction = 10,
                Company = "C",
                Description = "Foo",
                Id = 1,
                Name = "Foo GG",
                Price = 200
            });
            Assert.AreEqual(typeof(OkObjectResult), result.GetType());
        }

        [Test]
        public void TestDelete()
        {
            this._mockRepository.Setup(x => x.Delete(1)).Returns(true);

            var result = _controller.Delete(0);
            Assert.AreEqual(typeof(OkObjectResult), result.GetType());
        }

        [Test]
        public void TestGetAll()
        {
            List<Product> lst = new List <Product>();
            lst.Add(new Product
            {
                AgeRestriction = 10,
                Company = "C",
                Description = "Foo",
                Id = 1,
                Name = "Foo GG",
                Price = 200
            });
            lst.Add(new Product
            {
                AgeRestriction = 20,
                Company = "D",
                Description = "Fee",
                Id = 1,
                Name = "Fee GG",
                Price = 200
            });

            this._mockRepository.Setup(x => x.GetAll()).Returns(lst);
        }

        [Test]
        public void TestGetById()
        {
            Product item = new Product
            {
                AgeRestriction = 10,
                Company = "C",
                Description = "Foo",
                Id = 1,
                Name = "Foo GG",
                Price = 200
            };
            
            this._mockRepository.Setup(x => x.GetProduct(1)).Returns(item);
        }
    }
}