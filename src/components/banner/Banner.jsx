import "./banner.scss";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";

const variants = {
  invisible: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};

const Banner = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <Link to="/products/categories/vitamins">
      <motion.div className="default-margin" ref={ref} animate={isInView ? "visible" : "invisible"} variants={variants} transition={{ duration: 1 }}>
        <div className="home-banner">
          <h1>UNLEASH YOUR INNER VITALITY WITH OUR PREMIUM VITAMINS AND MINERALS</h1>
        </div>
      </motion.div>
    </Link>
  );
};

export default Banner;
