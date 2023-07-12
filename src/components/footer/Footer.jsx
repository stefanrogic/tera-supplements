import { Link } from "react-router-dom";
import "./footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="default-margin">
        <div className="top">
          <div className="left">
            <h2>
              Built by{" "}
              <a href="https://github.com/Rasgrin" target="_blank" rel="noreferrer">
                Stefan Rogic
              </a>
            </h2>
          </div>
          <div className="right">
            <h1>PRODUCTS</h1>
            <ul>
              {["PROTEIN", "CREATINE", "VITAMINS", "FOOD", "CLOTHING"].map((a, i) => (
                <li key={i}>
                  <Link to={`/products/categories/${a.toLowerCase()}`}>{a}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
