using ToysAndGames.Entities;

namespace ToysAndGames.Interfaces
{
    public interface IProductRepository
    {
        bool Add(Product product);
        bool Update(Product product);
        bool Delete(int productId);
        List<Product> GetAll();
        Product GetProduct(int productId);

    }
}