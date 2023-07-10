import "./product.scss";
import "react-toastify/dist/ReactToastify.css";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { toast } from "react-toastify";

import { addItem } from "../../redux/slices/cartSlice";
import { Link } from "react-router-dom";

const variants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};

/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
const Product = ({ data }) => {
  const notify = () => toast.success(`${data.productName} succesfully added to the cart.`);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // const cart = useSelector((state) => state.cartItems.items);
  const quantity = useSelector((state) => state.cartItems.quantity);
  const dispatch = useDispatch();
  const add = (product) => dispatch(addItem(product));

  return (
    <motion.div ref={ref} className="product-container" animate={isInView ? "visible" : "hidden"} variants={variants} transition={{ duration: 0.5 }}>
      <Link className="product-link" to={`/products/categories/${data.productCategory.toLowerCase()}/${data.productSlug}`}>
        <motion.div className="img-div" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9, backgroundColor: "#231f20" }}>
          <img src={data.productImg} alt="" />
        </motion.div>
      </Link>
      <div className="product-info">
        <Link className="product-link" to={`/products/categories/${data.productCategory.toLowerCase()}/${data.productSlug}`} style={{ color: "#231f20" }}>
          <div className="middle">
            <h2>{data.productName}</h2>
            <p>{data.productCategory}</p>
          </div>
        </Link>
        <div className="bottom">
          {data.discountPercent ? <p style={{ fontSize: "20px", fontWeight: "300", marginRight: "10px", textDecoration: "line-through" }}>{parseFloat(data.productPrice).toFixed(2)}</p> : ""}
          <p>${data.discountPercent ? parseFloat(data.productPrice - data.productPrice * (data.discountPercent / 100)).toFixed(2) : data.productPrice}</p>
          {data.discountPercent ? <span style={{ color: "red", fontWeight: "600" }}>{data.discountPercent + "%"}</span> : ""}

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9, backgroundColor: "#009444" }}
            onClick={() => {
              add({ ...data, quantity: quantity });
              notify();
            }}
          >
            <AddShoppingCartIcon />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default Product;
