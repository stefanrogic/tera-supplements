import "./cart.scss";

import { toast } from "react-toastify";
import { changeItemQuantity, clearCart, removeItem } from "../../redux/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import ScrollToTop from "../../components/scrollToTop/ScrollToTop";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const Cart = () => {
  const notify = (item) => toast.info(item ? `${item.productName} removed from the cart.` : "Cart Cleared.");

  const cart = useSelector((state) => state.cartItems);
  //   const total = useSelector((state) => state.cartItems.totalPrice);

  const dispatch = useDispatch();
  const remove = (product) => dispatch(removeItem(product));
  const clear = () => dispatch(clearCart());
  const changeQt = (item, quantity) => dispatch(changeItemQuantity({ item: item, quantity: quantity }));

  return (
    <>
      <ScrollToTop />
      <div className="default-margin">
        <motion.div className="cart" initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <div className="left">
            <h2>YOUR CART</h2>

            {cart.items.map((item, i) => (
              <div key={i} className="product">
                <Link to={`/product/${item.productSlug}`}>
                  <div className="img-div">
                    <img src={item.productImg} alt="" />
                  </div>
                  <div className="about-product">
                    <p className="product-name">{item.productName}</p>
                    <p className="weight">1000g</p>
                  </div>
                </Link>
                <div className="price">
                  {item.discountPercent ? <p style={{ fontSize: "20px", fontWeight: "300", textDecoration: "line-through" }}>${parseFloat(item.productPrice * item.quantity).toFixed(2)}</p> : ""}

                  <p style={{ fontSize: "25px", fontWeight: "600", margin: "0", color: item.discountPercent ? "red" : "" }}>
                    ${item.discountPercent ? parseFloat((item.productPrice - item.productPrice * (item.discountPercent / 100)) * item.quantity).toFixed(2) : item.productPrice * item.quantity}
                  </p>
                </div>
                <div className="quantity">
                  <button
                    onClick={() => {
                      changeQt(item, item.quantity - 1 > 1 ? item.quantity - 1 : 1);
                    }}
                    style={{ marginLeft: "5px" }}
                  >
                    <RemoveIcon fontSize="small" />
                  </button>
                  <input type="number" min={1} max={999} value={item.quantity} readOnly />
                  <button
                    onClick={() => {
                      changeQt(item, item.quantity + 1);
                    }}
                    style={{ marginRight: "5px" }}
                  >
                    <AddIcon fontSize="small" />
                  </button>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="remove-button"
                  onClick={() => {
                    remove(item);
                    notify(item);
                  }}
                >
                  <HighlightOffIcon fontSize="large" />
                </motion.button>
              </div>
            ))}

            {cart.items.length > 0 && (
              <motion.button
                className="all-products-btn"
                whileHover={{ scale: 1.1, backgroundColor: "#383334", color: "#ffffff" }}
                whileTap={{ scale: 0.9 }}
                style={{ height: "50px", background: "#231f20", color: "#ffffff", width: "100px", margin: "50px auto 0 auto" }}
                onClick={() => {
                  clear();
                  notify();
                }}
              >
                CLEAR
              </motion.button>
            )}
          </div>
          <div className="right">
            <h2>TOTAL</h2>

            <p style={{ fontSize: "30px", margin: "0" }}>$ {String(parseFloat(cart.totalPrice).toFixed(2))}</p>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Cart;
