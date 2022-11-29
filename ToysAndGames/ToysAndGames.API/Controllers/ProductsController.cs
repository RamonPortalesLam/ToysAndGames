using Microsoft.AspNetCore.Mvc;
using ToysAndGames.Entities;
using ToysAndGames.Interfaces;

namespace ToysAndGames.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController : ControllerBase
    {
        private readonly ILogger<ProductsController> _logger;
        private readonly IProductRepository _productRepository;

        public ProductsController(ILogger<ProductsController> logger, IProductRepository productRepository)
        {
            _logger = logger;
            _productRepository = productRepository;
        }

        [HttpGet]
        public ActionResult<List<Product>> Get() {
            try
            {
                return Ok(_productRepository.GetAll());
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        [HttpGet("{id}")]
        public ActionResult<Product> GetById(int id)
        {
            Product product = _productRepository.GetProduct(id);
            if (product != null)
            {
                return Ok(product);
            }
            else
            {
                return NotFound();
            }
        }

        [HttpPost]
        public IActionResult Add(Product product)
        {
            try
            {
                return Ok(_productRepository.Add(product));
            }
            catch (Exception)
            {
                return BadRequest();
            }            
        }

        [HttpPut]
        public IActionResult Update(Product product)
        {
            try
            {
                return Ok(_productRepository.Update(product));
            }
            catch (Exception)
            {
                return BadRequest();
            }
            
            
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id) {
            try
            {
                return Ok(_productRepository.Delete(id));
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }
    }
}