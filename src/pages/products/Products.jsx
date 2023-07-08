import "./products.scss";

import { useParams } from "react-router-dom";
import { allProducts } from "../../data/productList";

import Product from "../../components/product/Product";

const Products = () => {
  const { id } = useParams();
  const products = allProducts.filter((item) => item.productCategory.toLowerCase() === id);

  return (
    <div className="products">
      <div className="default-margin">
        <div className="left">
          <h2>FILTER</h2>
        </div>
        <div className="right">
          <h1>{id.toUpperCase()}</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo numquam est natus harum nesciunt qui, architecto quos corporis quas, voluptatibus fugit aut quis rem magnam tempora consequatur ea, temporibus aperiam provident explicabo
            impedit sed sequi. Distinctio perferendis commodi deleniti laudantium aut quam fugit dolorum voluptatem tempore, sit vero repellendus vel?
          </p>

          <div className="products-list">
            {products.map((product, i) => (
              <Product data={product} key={i} />
            ))}
            {products.map((product, i) => (
              <Product data={product} key={i} />
            ))}
            {products.map((product, i) => (
              <Product data={product} key={i} />
            ))}
            {products.map((product, i) => (
              <Product data={product} key={i} />
            ))}
            {products.map((product, i) => (
              <Product data={product} key={i} />
            ))}
            {products.map((product, i) => (
              <Product data={product} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
