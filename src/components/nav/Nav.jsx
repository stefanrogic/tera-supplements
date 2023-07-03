import "./nav.scss";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/Logo.svg";
import { motion } from "framer-motion";
// import { ReactComponent as LogoAlt } from "../../assets/LogoAlt.svg";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";

const Nav = () => {
  const cartNum = useSelector((state) => state.cartItems.navNum);

  return (
    <nav>
      <div className="default-margin">
        <div className="links">
          <Link to="/" style={{ margin: "0", display: "flex", justifyContent: "center", alignItems: "center", gap: "10px" }}>
            <Logo style={{ width: "35px", height: "35px" }} />
            <h2 style={{ color: "#231f20" }}>TERA</h2>
          </Link>
          <ul>
            <li>
              <a href="#">PROTEIN</a>
            </li>
            <li>
              <a href="#">CREATINE</a>
            </li>
            <li>
              <a href="#">VITAMINS</a>
            </li>
            <li>
              <a href="#">FOOD</a>
            </li>
            <li>
              <a href="#">CLOTHING</a>
            </li>
          </ul>
          <Link to="/cart">
            {cartNum > 0 && (
              <motion.div className="cart-number" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                <span>{cartNum}</span>
              </motion.div>
            )}
            <ShoppingCartIcon fontSize="large" style={{ marginLeft: "10px", color: "#231f20" }} />
          </Link>
          <button className="menu-button" style={{ marginLeft: "30px" }}>
            <MenuIcon fontSize="large" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
