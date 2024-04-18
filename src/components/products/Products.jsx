import "./products.scss";

import { allProducts } from "../../data/productList";
import { Link } from "react-router-dom";

const Products = ({ limit = 4, more = true }) => {
  return (
    <section className="featured-section">
      <h1>BEST SELLERS</h1>

      <div className="featured-section-grid">
        {allProducts.map(
          (p, i) =>
            i < limit && (
              <Link to={`products/categories/${p.productCategory.toLowerCase()}/${p.productSlug}`} key={i} className="featured-product-card">
                <div className="img-container">
                  <img src={p.productImg} alt="product-img" />
                </div>
                <div>
                  <h2>{p.productName}</h2>
                  <span>${p.productPrice}</span>
                </div>
              </Link>
            )
        )}
      </div>

      {more && <button>SHOP MORE</button>}
    </section>
  );
};

export default Products;
