import "./cart.scss";

import { toast } from "react-toastify";
import { changeItemQuantity, clearCart, removeItem } from "../../redux/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";

import ScrollToTop from "../../components/scrollToTop/ScrollToTop";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Link } from "react-router-dom";

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
              <div className="cart-product" key={i}>
                <Link to={`/product/${item.id}`} className="img" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),url('${item.productImg}')`, backgroundSize: "cover" }}></Link>
                <div className="side">
                  <div className="info">
                    <h2>{item.productName}</h2>
                    <p style={{ fontSize: "35px", fontWeight: "300", margin: "0" }}>${item.productPrice * item.quantity}</p>
                  </div>
                  <div className="buttons">
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

                    <button
                      className="remove-button"
                      onClick={() => {
                        remove(item);
                        notify(item);
                      }}
                    >
                      <HighlightOffIcon fontSize="large" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
            {cart.items.length > 0 && (
              <button
                style={{ height: "50px", background: "rgb(250, 107, 107)", color: "white", width: "100px", margin: "50px auto" }}
                onClick={() => {
                  clear();
                  notify();
                }}
              >
                CLEAR
              </button>
            )}
          </div>
          <div className="right">
            <h2>TOTAL</h2>

            <p style={{ fontSize: "30px", margin: "0" }}>$ {String(cart.totalPrice)}</p>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Cart;
