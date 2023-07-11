import "./products.scss";

import Product from "../product/Product";

import { allProducts } from "../../data/productList";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const variants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};

const Products = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div ref={ref} className="default-margin" animate={isInView ? "visible" : "hidden"} variants={variants} transition={{ duration: 0.5 }}>
      <h1>WE RECOMEND</h1>

      <div className="products" style={{ marginTop: "0" }}>
        {allProducts.map((product, i) => {
          if (i < 8) return <Product data={product} key={i} />;
        })}
      </div>

      <motion.button className="all-products-btn" whileHover={{ scale: 1.1, backgroundColor: "#383334", color: "#fff" }} whileTap={{ scale: 0.9 }}>
        ALL PRODUCTS
      </motion.button>
    </motion.div>
  );
};

export default Products;
