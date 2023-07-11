import "./productPage.scss";

import { Link, useParams } from "react-router-dom";
import { allProducts } from "../../data/productList";
import { motion } from "framer-motion";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/slices/cartSlice";
import { toast } from "react-toastify";

import ScrollToTop from "../../components/scrollToTop/ScrollToTop";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const ProductPage = () => {
  const { id } = useParams();
  const product = allProducts.find((item) => item.productSlug === id);

  const notify = () => toast.success(`${product.productName} succesfully added to the cart.`);

  const dispatch = useDispatch();
  const add = (product) => dispatch(addItem(product));

  const [quantity, setQuantity] = useState(1);

  return (
    <>
      <ScrollToTop />
      <div className="default-margin">
        <motion.div className="product-page" initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <div className="path">
            <Link to="/products">Products</Link>
            <p>{">"}</p>
            <Link to={`/products/categories/${product.productCategory.toLowerCase()}`}>{product.productCategory}</Link>
            <p>{">"}</p>
            <Link to={`/products/categories/${product.productCategory.toLowerCase()}/${product.productSlug}`}>{product.productName}</Link>
          </div>
          <div className="top">
            <div className="img-div">
              <img src={product.productImg} alt="" />
            </div>
            <div className="product-info">
              <h1>{product.productName}</h1>
              <p style={{ fontSize: "30px" }}>{product.productCategory}</p>
              <p style={{ fontSize: "20px", fontWeight: "300", color: "grey" }}>{product.productDescription}</p>

              <div className="amount">
                <p>{product.volume || "1000g"}</p>
              </div>

              <div className="price">
                {product.discountPercent ? <p style={{ fontSize: "40px", fontWeight: "300", textDecoration: "line-through" }}>{parseFloat(product.productPrice).toFixed(2)}</p> : ""}
                <p style={{ fontSize: "60px", fontWeight: "500" }}>${product.discountPercent ? parseFloat(product.productPrice - product.productPrice * (product.discountPercent / 100)).toFixed(2) : product.productPrice}</p>
                {product.discountPercent ? <span style={{ color: "red", fontSize: "40px", fontWeight: "600" }}>{product.discountPercent + "%"}</span> : ""}
              </div>

              <div className="buttons">
                <div className="quantity">
                  <button onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))} style={{ marginLeft: "5px" }}>
                    <RemoveIcon fontSize="small" />
                  </button>
                  <input type="number" min={1} max={999} value={quantity} readOnly />
                  <button onClick={() => setQuantity((prev) => (prev < 999 ? prev + 1 : 999))} style={{ marginRight: "5px" }}>
                    <AddIcon fontSize="small" />
                  </button>
                </div>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9, backgroundColor: "#009444" }}
                  onClick={() => {
                    add({ ...product, quantity: quantity });
                    notify();
                  }}
                >
                  <AddShoppingCartIcon />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default ProductPage;
