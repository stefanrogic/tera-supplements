import "./products.scss";

import { Link, useParams } from "react-router-dom";
import { allProducts } from "../../data/productList";
import { motion } from "framer-motion";

import Product from "../../components/product/Product";
import { useState } from "react";
import { filters } from "../../data/filters";

const Products = () => {
  const { id } = useParams();
  const products = allProducts.filter((item) => item.productCategory.toLowerCase() === id);

  const categoryFilters = filters.filter((f) => f.category === id);

  const [currentFilters, setCurrentFilters] = useState([]);
  const removeFilter = (arr, e) => arr.filter((a) => a != e.target.id);

  return (
    <motion.div className="products" initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
      <div className="default-margin">
        <div className="left">
          <h2>FILTERS</h2>

          {categoryFilters.map((f, i) => (
            <div className="filter-section" key={i}>
              <h3>{f.section.toUpperCase()}</h3>
              {f.children.map((c, i) => (
                <div className="filter-section-child" key={i}>
                  <input
                    type="checkbox"
                    name=""
                    id={c}
                    onClick={(e) => {
                      e.target.checked ? setCurrentFilters((prev) => [...prev, e.target.id]) : setCurrentFilters((prev) => removeFilter(prev, e));
                    }}
                  />
                  <p>{c}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="right">
          <div className="path">
            <Link to="/products">Products</Link>
            <p>{">"}</p>
            <Link to={`/products/categories/${id.charAt(0).toUpperCase() + id.slice(1)}`}>{id.charAt(0).toUpperCase() + id.slice(1)}</Link>
          </div>
          <h1>{id.toUpperCase()}</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo numquam est natus harum nesciunt qui, architecto quos corporis quas, voluptatibus fugit aut quis rem magnam tempora consequatur ea, temporibus aperiam provident explicabo
            impedit sed sequi. Distinctio perferendis commodi deleniti laudantium aut quam fugit dolorum voluptatem tempore, sit vero repellendus vel?
          </p>

          <div className="products-list">
            {products.length === 0 ? <h1>Coming soon</h1> : ""}

            {products.map((product, i) => {
              if (currentFilters.length === 0 || currentFilters.includes(product.productFilter)) return <Product data={product} key={i} />;
            })}
            {/* {products.map((product, i) => (
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
            ))} */}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Products;
