using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ToysAndGames.Entities;
using ToysAndGames.Interfaces;

namespace ToysAndGames.NUnit
{
    internal class ProductMockRepository : IProductRepository
    {
        private List<Product> products= new List<Product>();
        public bool Add(ToysAndGames.Entities.Product product)
        {
            products.Add(product);
            
            return true;
        }

        public bool Delete(int productId)
        {
            return true;
        }

        public List<ToysAndGames.Entities.Product> GetAll()
        {
            return products;
        }

        public ToysAndGames.Entities.Product GetProduct(int productId)
        {
            return products.FirstOrDefault(x => x.Id == productId);
        }

        public bool Update(ToysAndGames.Entities.Product product)
        {
            return true;
        }
    }
}
