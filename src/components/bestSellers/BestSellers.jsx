import "./bestSellers.scss";

import { allProducts } from "../../data/productList";

import Product from "../product/Product";

const BestSellers = () => {
  return (
    <div className="default-margin">
      <h1>BEST SELLERS</h1>
      <div className="best-sellers">
        <Product data={allProducts.find((_, i) => i === 0)} />
        <Product data={allProducts.find((_, i) => i === 1)} />
        <Product data={allProducts.find((_, i) => i === 2)} />
        <Product data={allProducts.find((_, i) => i === 3)} />
      </div>
    </div>
  );
};

export default BestSellers;
