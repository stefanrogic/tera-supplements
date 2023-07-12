import "./products.scss";

import { Link, useParams } from "react-router-dom";
import { allProducts } from "../../data/productList";
import { motion } from "framer-motion";
import { useState } from "react";
import { filters } from "../../data/filters";
import Product from "../../components/product/Product";

import ScrollToTop from "../../components/scrollToTop/ScrollToTop";

const Products = () => {
  const { id } = useParams();
  const products = allProducts.filter((item) => item.productCategory.toLowerCase() === id);

  const categoryFilters = filters.filter((f) => f.category === id);

  const [currentFilters, setCurrentFilters] = useState([]);

  const removeFilter = (arr, e) => arr.filter((a) => a != e.target.id);

  const checkFilters = (arr) => {
    let exists = false;

    arr.map((f) => {
      if (currentFilters.includes(f.value)) exists = true;
    });

    return exists;
  };

  return (
    <>
      <ScrollToTop />
      <motion.div className="products" initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
        <motion.div className="default-margin" key={id} initial={{ opacity: 0 }} animate={{ opacity: 100 }} transition={{ duration: 1 }}>
          <motion.div className="left" initial={{ opacity: 0 }} animate={{ opacity: 100 }} transition={{ duration: 0.5 }}>
            <h2 style={{ marginBottom: "20px" }}>FILTERS</h2>

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
                        // TODO: MULTIPLE FILTERS NOT WORKING (EXAMPLE: PRICE + WEIGHT SHOWS PRODUCT WITH SELECTED PRICE BUT IT DOESN'T CARE ABOUT THE WEIGHT)
                        e.target.checked ? setCurrentFilters((prev) => [...prev, e.target.id]) : setCurrentFilters((prev) => removeFilter(prev, e));
                      }}
                    />
                    <p>{c}</p>
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
          <div className="right">
            <div className="path">
              <Link to="/products">Products</Link>
              <p>{">"}</p>
              <Link to={`/products/categories/${id.charAt(0).toUpperCase() + id.slice(1)}`}>{id.charAt(0).toUpperCase() + id.slice(1)}</Link>
            </div>
            <h1>
              {id.toUpperCase()} {id === "vitamins" ? "/ MINERALS" : ""}
            </h1>
            <p>
              {id === "protein" &&
                "Our protein powders are carefully crafted with premium ingredients, delivering the perfect blend of essential amino acids and nutrients your body needs to build and repair muscle tissue. From whey protein isolate to plant-based options, we offer a variety of delicious flavors and formulations to cater to your specific dietary preferences and requirements."}

              {id === "creatine" &&
                "Our creatine formulations are designed to provide you with a potent source of energy, strength, and power, helping you crush your workouts and achieve your fitness goals. Whether you're an athlete seeking explosive power, a bodybuilder aiming for increased muscle mass, or simply looking to enhance your overall physical performance, our creatine supplements are your ultimate ally. "}

              {id === "vitamins" &&
                "From essential vitamins like Vitamin C, D, and B-complex, to vital minerals such as iron, calcium, and magnesium, our products are crafted to provide you with the nutrients your body craves. Boost your immune system, strengthen your bones, enhance your energy levels, and promote optimal bodily functions with our trusted selection."}

              {id === "food" &&
                " Explore our wide selection of nourishing and flavorful foods designed to support your health and well-being. From wholesome snacks to nutritious pantry staples, we have curated a range of options to cater to your dietary needs and taste preferences. "}

              {id === "clothing" &&
                "From moisture-wicking fabrics to ergonomic designs, our sportswear is crafted with precision and functionality in mind. Whether you're hitting the gym, going for a run, or engaging in your favorite sport, our clothing offers superior comfort, flexibility, and breathability. We prioritize quality and durability, ensuring that our sportswear can withstand the rigors of your training sessions."}
            </p>

            <div className="products-list">
              {products.length === 0 ? (
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", marginTop: "100px" }}>
                  <h1>COMING SOON</h1>
                </div>
              ) : (
                ""
              )}

              {products.map((product, i) => {
                if (currentFilters.length === 0 || checkFilters(product.productFilter)) return <Product data={product} key={i} />;
              })}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Products;
