import "./product.scss";
import "react-toastify/dist/ReactToastify.css";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

// import { motion, useInView } from "framer-motion";

import { useDispatch } from "react-redux";

import { toast } from "react-toastify";

import { addItem } from "../../redux/slices/cartSlice";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
const Product = ({ data }) => {
  const notify = () => toast.success(`${data.productName} succesfully added to the cart.`);

  // const cart = useSelector((state) => state.cartItems.items);
  const dispatch = useDispatch();
  const add = (product) => dispatch(addItem(product));

  return (
    <div className="product-container">
      <Link className="product-link" to={`/products/categories/${data.productCategory.toLowerCase()}/${data.productSlug}`}>
        <div className="img-div">
          <LazyLoadImage src={data.productImg} key={data.productImg} effect="blur" placeholderSrc={`http://localhost:5173/${data.productImg}`} />
        </div>
      </Link>
      <div className="product-info">
        <Link className="product-link" to={`/products/categories/${data.productCategory.toLowerCase()}/${data.productSlug}`} style={{ color: "#231f20" }}>
          <div className="middle">
            <h2>{data.productName}</h2>
            <p>{data.volume ? data.volume : "1000g"}</p>
          </div>
        </Link>
        <div className="bottom">
          {data.discountPercent ? <p style={{ fontSize: "20px", fontWeight: "300", marginRight: "10px", textDecoration: "line-through" }}>{parseFloat(data.productPrice).toFixed(2)}</p> : ""}
          <p>${data.discountPercent ? parseFloat(data.productPrice - data.productPrice * (data.discountPercent / 100)).toFixed(2) : data.productPrice}</p>
          {data.discountPercent ? <span style={{ color: "red", fontWeight: "600" }}>{data.discountPercent + "%"}</span> : ""}

          <button
            onClick={() => {
              add({ ...data, quantity: 1 });
              notify();
            }}
          >
            <AddShoppingCartIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
