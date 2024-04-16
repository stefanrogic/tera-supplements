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
              <h2>CATEGORY</h2>
              <span>About this category</span>
            </div>
          </div>
          <div className="category-card">
            <div className="img-container"></div>

            <div>
              <h2>CATEGORY</h2>
              <span>About this category</span>
            </div>
          </div>
        </section>

        <section className="featured-section">
          <div className="featured-section-grid">
            <div className="featured-product-card">
              <div className="img-container"></div>
              <div>
                <h2>CATEGORY</h2>
                <span>About this category</span>
              </div>
            </div>
            <div className="featured-product-card">
              <div className="img-container"></div>
              <div>
                <h2>CATEGORY</h2>
                <span>About this category</span>
              </div>
            </div>
            <div className="featured-product-card">
              <div className="img-container"></div>
              <div>
                <h2>CATEGORY</h2>
                <span>About this category</span>
              </div>
            </div>
            <div className="featured-product-card">
              <div className="img-container"></div>
              <div>
                <h2>CATEGORY</h2>
                <span>About this category</span>
              </div>
            </div>
          </div>

          <button>SHOP MORE</button>
        </section>

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

        {/* TEMP */}
        <br />
      </div>
    </div>
  );
};

export default Home;
