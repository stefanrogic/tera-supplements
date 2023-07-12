import "./sidebar.scss";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import HomeIcon from "@mui/icons-material/Home";
import CloseIcon from "@mui/icons-material/Close";

const Sidebar = ({ show, setShow }) => {
  return (
    <motion.div className="sidebar" key={show} initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 0.5 }}>
      <div className="top">
        <Link to="/">
          <button onClick={() => setShow(false)}>
            <HomeIcon fontSize="large" />
          </button>
        </Link>
        <button onClick={() => setShow(false)}>
          <CloseIcon fontSize="large" />
        </button>
      </div>

      <ul>
        {["PROTEIN", "CREATINE", "VITAMINS", "FOOD", "CLOTHING"].map((a, i) => (
          <li key={i}>
            <Link to={`/products/categories/${a.toLowerCase()}`} onClick={() => setShow(false)}>
              {a}
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Sidebar;
