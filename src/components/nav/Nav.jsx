import "./nav.scss";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/Logo.svg";
import { motion } from "framer-motion";
// import { ReactComponent as LogoAlt } from "../../assets/LogoAlt.svg";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const Nav = () => {
  const [showCartDropdown, setShowCartDropdown] = useState(false);

  const cart = useSelector((state) => state.cartItems);
  const location = window.location.href.split("/");

  return (
    <nav>
      <div className="default-margin">
        <div className="links">
          <Link to="/" style={{ margin: "0", display: "flex", justifyContent: "center", alignItems: "center", gap: "10px" }}>
            <Logo style={{ width: "35px", height: "35px" }} />
            <h2 style={{ color: "#231f20" }}>TERA</h2>
          </Link>
          <ul>
            {["PROTEIN", "CREATINE", "VITAMINS", "FOOD", "CLOTHING"].map((a, i) => (
              <li key={i}>
                <Link to={`/products/categories/${a.toLowerCase()}`}>{a}</Link>
              </li>
            ))}
          </ul>

          <Link to="/cart">
            {cart.navNum > 0 && (
              <motion.div className="cart-number" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                <span>{cart.navNum}</span>
              </motion.div>
            )}
            <ShoppingCartIcon fontSize="large" style={{ marginLeft: "10px", color: "#231f20", zIndex: "50" }} onMouseEnter={() => setShowCartDropdown(true)} onMouseLeave={() => setShowCartDropdown(false)} onClick={() => setShowCartDropdown(false)} />
          </Link>

          {showCartDropdown && location.find((_, i) => i === location.length - 1) !== "cart" ? (
            <div className="cart-dropdown" onMouseEnter={() => setShowCartDropdown(true)} onMouseLeave={() => setShowCartDropdown(false)}>
              <motion.div className="cart-items" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                {/* <h2 style={{ margin: "20px 20px 30px 20px" }}>YOUR CART</h2> */}
                {cart.items.map((item, i) => (
                  <Link
                    to={`/products/categories/${item.productCategory.toLowerCase()}/${item.productSlug}`}
                    className="product"
                    key={i}
                    onClick={() => {
                      setShowCartDropdown(false);
                    }}
                  >
                    <div className="product-img">
                      <img src={item.productImg} alt="" />
                    </div>
                    <div className="product-info">
                      <p style={{ fontWeight: "500" }}>{item.productName}</p>
                      <p style={{ fontWeight: "300" }}> quantity: {item.quantity} </p>
                    </div>

                    <p className="price" style={{ fontSize: "25px", fontWeight: "600", margin: "0 0 0 auto" }}>
                      ${item.discountPercent ? parseFloat(item.productPrice - item.productPrice * (item.discountPercent / 100)).toFixed(2) : item.productPrice}
                    </p>
                  </Link>
                ))}
                <div className="total">
                  <h2>TOTAL:</h2>
                  <p style={{ fontSize: "30px", margin: "0", fontWeight: "600" }}>$ {String(parseFloat(cart.totalPrice).toFixed(2))}</p>
                </div>
                <Link to="/cart">
                  <button onClick={() => setShowCartDropdown(false)}>VIEW CART</button>
                </Link>
              </motion.div>
            </div>
          ) : (
            ""
          )}

          <button className="menu-button" style={{ marginLeft: "30px" }}>
            <MenuIcon fontSize="large" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
