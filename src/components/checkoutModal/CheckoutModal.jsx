import "./checkoutModal.scss";

import { AnimatePresence, motion } from "framer-motion";
import { clearCart, setPurchaseComplete, setShowCheckout } from "../../redux/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";

import CloseIcon from "@mui/icons-material/Close";

const CheckoutModal = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartItems);

  const clear = () => {
    dispatch(clearCart());
    dispatch(setPurchaseComplete());
  };

  const closeModal = () => dispatch(setShowCheckout(false));

  return (
    <>
      <AnimatePresence>
        {cart.showCheckout && <motion.div key="modal-bg" className="modal-bg" onClick={() => closeModal()} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} exit={{ opacity: "0" }}></motion.div>}
        {cart.showCheckout && (
          <motion.div key="modal" className="checkout-modal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} exit={{ opacity: "0" }}>
            <div className="top">
              <button onClick={() => closeModal()}>
                <CloseIcon fontSize="large" />
              </button>
            </div>
            <div className="center">
              <span>Email</span>
              <input type="text" name="email" defaultValue="name@email.com" />

              <span>Card information</span>
              <div className="card-inputs">
                <input type="text" name="card-number" defaultValue="4242 4242 4242 4242" />
                <div>
                  <input type="text" name="expiration-date" defaultValue="04/24" />
                  <input type="text" name="three-digits-on-back" defaultValue="424" />
                </div>
              </div>
              <span>Name on card</span>
              <input type="text" name="full-name" defaultValue="John Doe" />

              <span>Country</span>
              <input type="text" name="country" defaultValue="Australia" />

              <p>
                This is in test mode. <br /> You can confirm your order without filling the fields.
              </p>
            </div>
            <div className="bottom">
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#383334", color: "#ffffff" }}
                whileTap={{ scale: 0.9, backgroundColor: "#009444" }}
                onClick={() => {
                  clear();
                  closeModal();
                }}
              >
                CONFIRM ORDER
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CheckoutModal;
