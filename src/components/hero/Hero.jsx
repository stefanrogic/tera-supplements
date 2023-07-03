import "./hero.scss";

import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import HeroContent from "../heroContent/HeroContent";

import { listPageForward, listPageBackward, setPage } from "../../redux/slices/heroSectionSlice";
import { useSelector, useDispatch } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";

const Hero = () => {
  const page = useSelector((state) => state.heroSectionPage.page);
  const dispatch = useDispatch();
  const pageForward = () => dispatch(listPageForward());
  const pageBackward = () => dispatch(listPageBackward());
  const setPageExact = (val) => dispatch(setPage(val));

  return (
    <div className="default-margin">
      <div className="hero-section">
        <AnimatePresence initial={false} mode="wait">
          {page === 0 && <HeroContent key={0} contentPage={0} />}
          {page === 1 && <HeroContent key={1} contentPage={1} />}
          {page === 2 && <HeroContent key={2} contentPage={2} />}
        </AnimatePresence>

        <div className="bottom">
          <div className="list">
            {[0, 1, 2].map((_, i) => (
              <div key={i} style={{ backgroundColor: i === page ? "#231f20" : "white" }} onClick={() => setPageExact(i)}></div>
            ))}
          </div>

          <div className="buttons">
            <motion.button onClick={() => pageBackward()} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <KeyboardArrowLeftIcon />
            </motion.button>
            <motion.button onClick={() => pageForward()} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <KeyboardArrowRightIcon />
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
