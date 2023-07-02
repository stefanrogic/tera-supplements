import "./product.scss";


import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import "react-toastify/dist/ReactToastify.css";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { toast } from "react-toastify";

import { addItem } from "../../redux/slices/cartSlice";
import { Link } from "react-router-dom";

const variants = {
  invisible: { opacity: 0, x: -100 },
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
    <Link className="product-link" to={`/product/${data.id}`}>
      
      <motion.div ref={ref} className="product-container" animate={isInView ? "visible" : "invisible"} variants={variants} transition={{ duration: 1 }}>
        <div className="img-placeholder" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),url('${data.productImg}')`, backgroundSize: "cover" }}></div>
        <div className="product-info">
          <div className="middle">
            <h2>{data.productName}</h2>
            <p>{data.productCategory}</p>
          </div>
          <div className="bottom">
            {data.discountPercent ? <p style={{ fontSize: "20px", marginRight: "10px", textDecoration: "line-through" }}>{data.productPrice}</p> : ""}
            <p>${data.discountPercent ? parseFloat(data.productPrice - data.productPrice * (data.discountPercent / 100)).toFixed(2) : data.productPrice}</p>
            {data.discountPercent ? <span style={{ color: "red" }}>{data.discountPercent + "%"}</span> : ""}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
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
    </Link>
  );
};

export default Product;
