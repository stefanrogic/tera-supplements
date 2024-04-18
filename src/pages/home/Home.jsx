import Products from "../../components/products/Products";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <section className="hero-section"></section>
      <div className="wrapper">
        <section className="brands-section">
          <div className="brand"></div>
          <div className="brand"></div>
          <div className="brand"></div>
          <div className="brand"></div>
          <div className="brand"></div>
        </section>

        <section className="product-cta-section">
          <div className="category-card">
            <div className="img-container"></div>

            <div>
              <h2>NEW</h2>
              <span>Supplements</span>
            </div>
          </div>
          <div className="category-card">
            <div className="img-container"></div>

            <div>
              <h2>CLOTHES</h2>
              <span>About this category</span>
            </div>
          </div>
        </section>

        <Products />

        <section className="home-banner-cta"></section>

        <section className="featured-section">
          <div className="featured-section-grid  alt">
            <div className="featured-category-card">
              <div className="img-container"></div>
            </div>
            <div className="featured-category-card">
              <div className="img-container"></div>
            </div>
            <div className="featured-category-card">
              <div className="img-container"></div>
            </div>
          </div>
        </section>
      </div>

      <section className="contact-section"></section>
    </div>
  );
};

export default Home;
