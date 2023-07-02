import "./banner.scss";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const variants = {
  invisible: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};

const Banner = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div className="default-margin" ref={ref} animate={isInView ? "visible" : "invisible"} variants={variants} transition={{ duration: 1 }}>
      <div className="home-banner">
        <h1>CHECK OUR PROTEIN POWDERS</h1>
      </div>
    </motion.div>
  );
};

export default Banner;
