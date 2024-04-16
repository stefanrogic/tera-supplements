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

        <section className="product-cta">
          <div className="category-card">
            <div className="img-container"></div>
            <h1>CATEGORY</h1>
          </div>
          <div className="category-card">
            <div className="img-container"></div>
            <h1>CATEGORY</h1>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
