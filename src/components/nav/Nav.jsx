import "./nav.scss";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/Logo.svg";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Nav = () => {
  const cartNum = useSelector((state) => state.cartItems.navNum);

  return (
    <nav>
      <div className="default-margin">
        <div className="links">
          <Link to="/" style={{ margin: "0", display: "flex", justifyContent: "center", alignItems: "center", gap: "10px" }}>
            <Logo style={{ width: "35px", height: "35px" }} />
            <h2>TERA</h2>
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
            {cartNum > 0 && cartNum} <ShoppingCartIcon fontSize="large" style={{ marginLeft: "10px" }} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
