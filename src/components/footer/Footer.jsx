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
