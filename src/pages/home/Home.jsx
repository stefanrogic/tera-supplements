import "./home.scss";

import Hero from "../../components/hero/Hero";
import BestSellers from "../../components/bestSellers/BestSellers";
import Banner from "../../components/banner/Banner";
import Products from "../../components/products/Products";

import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
      <Hero />
      <BestSellers />
      <Banner />
      <Products />
    </motion.div>
  );
};

export default Home;
