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
    <motion.div ref={ref} className="default-margin" animate={isInView ? "visible" : "invisible"} variants={variants} transition={{ duration: 1 }}>
      <motion.div ref={ref} className="header" animate={isInView ? "visible" : "invisible"} variants={variants} transition={{ duration: 1 }}>
        <h1>OUR PRODUCTS</h1>
        <motion.button className="all-products-btn" whileHover={{ scale: 1.1, backgroundColor: "rgb(250, 107, 107)", color: "#fff" }} whileTap={{ scale: 0.9 }}>
          ALL PRODUCTS
        </motion.button>
      </motion.div>

      <div className="products">
        {allProducts.map((product, i) => (
          <Product data={product} key={i} />
        ))}

        {allProducts.map((product, i) => (
          <Product data={product} key={i} />
        ))}

        {allProducts.map((product, i) => i !== 2 && <Product data={product} key={i} />)}
      </div>
    </motion.div>
  );
};

export default Products;
