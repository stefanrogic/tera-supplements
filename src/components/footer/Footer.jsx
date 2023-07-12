import { Link } from "react-router-dom";
import "./footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="default-margin">
        <div className="top">
          <div className="left"></div>
          <div className="center">
            <h1>PRODUCTS</h1>
            <ul>
              {["PROTEIN", "CREATINE", "VITAMINS", "FOOD", "CLOTHING"].map((a, i) => (
                <li key={i}>
                  <Link to={`/products/categories/${a.toLowerCase()}`}>{a}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="right">
            <h1>COMPANY INFORMATION</h1>
            <ul>
              <li>
                <a href="#">ABOUT US</a>
              </li>
              <li>
                <a href="#">PRIVACY POLICY</a>
              </li>
              <li>
                <a href="#">TERMS AND CONDITIONS</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
