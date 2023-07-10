import "./home.scss";

import Hero from "../../components/hero/Hero";
import BestSellers from "../../components/bestSellers/BestSellers";
import Banner from "../../components/banner/Banner";
import Products from "../../components/products/Products";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <motion.div className="home" initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
      <Hero />
      <div className="default-margin">
        <ul>
          {["PROTEIN", "CREATINE", "VITAMINS", "FOOD", "CLOTHING"].map((a, i) => (
            <Link key={i} to={`/products/categories/${a.toLowerCase()}`}>
              <motion.li key={i} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9, backgroundColor: "#231f20" }}>
                {a}
              </motion.li>
            </Link>
          ))}
        </ul>
      </div>
      <BestSellers />
      <Banner />
      <Products />
    </motion.div>
  );
};

export default Home;
