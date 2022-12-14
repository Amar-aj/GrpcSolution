using Grpc.Core;
using GrpcServer.Protos;
using static GrpcServer.Protos.ProductsService;
using System.Reflection;

namespace GrpcServer.Services
{
    public class ProductsAppService : ProductsServiceBase
    {
        public AppDbContext dbContext;
        public ProductsAppService(AppDbContext DBContext)
        {
            dbContext = DBContext;
        }
        #region GetAll
        public override Task<Products> GetAll(Empty request, ServerCallContext context)
        {
            Products response = new Products();
            var products = from prd in dbContext.Products
                           select new Product()
                           {
                               ProductRowId = prd.ProductRowId,
                               ProductId = prd.ProductId,
                               ProductName = prd.ProductName,
                               CategoryName = prd.CategoryName,
                               Manufacturer = prd.Manufacturer,
                               Price = prd.Price
                           };
            response.Items.AddRange(products.ToArray());
            return Task.FromResult(response);
        }
        #endregion
        #region GetById
        public override Task<Product> GetById(ProductRowIdFilter request, ServerCallContext context)
        {
            var product = dbContext.Products.Find(request.ProductRowId);
            var searchedProduct = new Product()
            {
                ProductRowId = product.ProductRowId,
                ProductId = product.ProductId,
                ProductName = product.ProductName,
                CategoryName = product.CategoryName,
                Manufacturer = product.Manufacturer,
                Price = product.Price
            };
            return Task.FromResult(searchedProduct);
        }
        #endregion
        #region PostInsert
        public override Task<Product> Post(Product request, ServerCallContext context)
        {
            var prdAdded = new Models.Product()
            {
                ProductId = request.ProductId,
                ProductName = request.ProductName,
                CategoryName = request.CategoryName,
                Manufacturer = request.Manufacturer,
                Price = request.Price
            };
            var res = dbContext.Products.Add(prdAdded);
            dbContext.SaveChanges();
            var response = new Product()
            {
                ProductRowId = res.Entity.ProductRowId,
                ProductId = res.Entity.ProductId,
                ProductName = res.Entity.ProductName,
                CategoryName = res.Entity.CategoryName,
                Manufacturer = res.Entity.Manufacturer,
                Price = res.Entity.Price
            };
            return Task.FromResult<Product>(response);
        }
        #endregion
        #region PUTUPDATE
        public override Task<Product> Put(Product request, ServerCallContext context)
        {
            Models.Product prd = dbContext.Products.Find(request.ProductRowId);
            if (prd == null)
            {
                return Task.FromResult<Product>(null);
            }
            prd.ProductRowId = request.ProductRowId;
            prd.ProductId = request.ProductId;
            prd.ProductName = request.ProductName;
            prd.CategoryName = request.CategoryName;
            prd.Manufacturer = request.Manufacturer;
            prd.Price = request.Price;
            dbContext.Products.Update(prd);
            dbContext.SaveChanges();
            return Task.FromResult<Product>(new Product()
            {
                ProductRowId = prd.ProductRowId,
                ProductId = prd.ProductId,
                ProductName = prd.ProductName,
                CategoryName = prd.CategoryName,
                Manufacturer = prd.Manufacturer,
                Price = prd.Price
            });
        }
        #endregion
        #region DELETE
        public override Task<Empty> Delete(ProductRowIdFilter request, ServerCallContext context)
        {
            Models.Product prd = dbContext.Products.Find(request.ProductRowId);
            if (prd == null)
            {
                return Task.FromResult<Empty>(null);
            }
            dbContext.Products.Remove(prd);
            dbContext.SaveChanges();
            return Task.FromResult<Empty>(new Empty());
        }
        #endregion
    }
}
