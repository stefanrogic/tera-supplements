import "./home.scss";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import Products from "../../components/products/Products";

import { Navigation, Pagination, A11y, Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Home = () => {
  return (
    <div className="home">
      <section className="hero-section">
        <Swiper
          modules={[Navigation, Pagination, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          effect={"fade"}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide>
            <img src="https://pixabay.com/get/g7f68cda4c154464829f79cf576cb30f2da3a622fe6cec82c9c580b244de5d54d804a5b7a7da45dbe018b8266e36674a09895cba7d44ea827349ee4fd9a6c74f7_1920.jpg" alt="hero-img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://pixabay.com/get/ge8df5ec48a7e762083a30e2e37910dd68d133bfee32b002a00cdc2ee2a1c02f50146752b46fdc774457cc730596ae53c_1920.jpg" alt="hero-img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://pixabay.com/get/g5c12fa35f922d0e1d7fdba665f481c3db9e84df91cfaefe49d652a236629b8ce783eedd4ad0d82dea8d1cec6540b646cf161d90d6764f7f581d2813ee9845e8f_1920.jpg" alt="hero-img" />
          </SwiperSlide>
        </Swiper>
      </section>
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
