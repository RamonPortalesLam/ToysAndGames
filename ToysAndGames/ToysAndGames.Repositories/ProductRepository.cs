using ToysAndGames.Entities;
using ToysAndGames.Interfaces;

namespace ToysAndGames.Repositories
{
    public class ProductRepository : IProductRepository
    {
        private readonly ToysAndGamesContext _dbContext;
        public ProductRepository(ToysAndGamesContext dbContext)
        {
            _dbContext = dbContext;
        }

        public bool Add(Product product)
        {
            _dbContext.Products.Add(product);
            _dbContext.SaveChanges();
            return true;
        }

        public bool Delete(int productId)
        {
            Product result = _dbContext.Products.FirstOrDefault(x => x.Id == productId);
            if (result != null)
            {
                _dbContext.Products.Remove(result);
                _dbContext.SaveChanges();
            }
            return true;
        }

        public List<Product> GetAll()
        {
            return _dbContext.Products.ToList();
        }

        public Product GetProduct(int productId)
        {
            return _dbContext.Products.FirstOrDefault(x => x.Id == productId);
        }

        public bool Update(Product product)
        {
            Product result = _dbContext.Products.FirstOrDefault(x => x.Id == product.Id);
            if (result != null)
            {
                result.Price = product.Price;
                result.Description = product.Description;
                result.AgeRestriction = product.AgeRestriction;
                result.Company = product.Company;
                result.Name = product.Name;

                _dbContext.Products.Update(result);
                _dbContext.SaveChanges();
            }
            return true;
        }
    }
}