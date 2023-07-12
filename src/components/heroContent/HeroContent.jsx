import { motion } from "framer-motion";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { listPageForward } from "../../redux/slices/heroSectionSlice";
import { Link } from "react-router-dom";

const content = [
  {
    text: "20% OFF ON ALL VITAMINS",
    img: "https://cdn.pixabay.com/photo/2014/11/17/13/17/crossfit-534615_1280.jpg",
    position: "bottom",
    link: "/products/categories/vitamins",
  },
  {
    text: "TOP-QUALITY PROTEIN POWDERS",
    img: "https://cdn.pixabay.com/photo/2017/08/07/14/02/man-2604149_1280.jpg",
    position: "top",
    link: "/products/categories/protein",
  },
  {
    text: "PREMIUM-GRADE CREATINE SUPPLEMENTS",
    img: "https://cdn.pixabay.com/photo/2016/12/21/19/22/boxer-1923694_1280.jpg",
    position: "center",
    link: "/products/categories/creatine",
  },
];

const variants = {
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 100 },
};

/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
const HeroContent = ({ contentPage }) => {
  const dispatch = useDispatch();
  const changePageList = () => dispatch(listPageForward());

  useEffect(() => {
    const timer = setTimeout(() => {
      changePageList();
    }, 5000);
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Link to={content.find((_, i) => i === contentPage).link} style={{ height: "inherit", borderRadius: "inherit" }}>
      <motion.div
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        style={{
          height: "inherit",
          borderRadius: "inherit",
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),url(${content.find((_, i) => i === contentPage).img})`,
          backgroundSize: "cover",
          backgroundPosition: content.find((_, i) => i === contentPage).position,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2 style={{ fontSize: "50px", color: "white", textAlign: "center" }}>{content.find((_, i) => i === contentPage).text}</h2>
      </motion.div>
    </Link>
  );
};

export default HeroContent;
