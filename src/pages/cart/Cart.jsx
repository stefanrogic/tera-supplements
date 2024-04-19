import "./cart.scss";

import { toast } from "react-toastify";
import { changeItemQuantity, removeItem, setShowCheckout } from "../../redux/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import ScrollToTop from "../../components/scrollToTop/ScrollToTop";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import Products from "../../components/products/Products";

const Cart = () => {
  const notify = (item) => toast.info(item ? `${item.productName} removed from the cart.` : "Cart Cleared.");

  const cart = useSelector((state) => state.cartItems);

  //   const total = useSelector((state) => state.cartItems.totalPrice);

  const dispatch = useDispatch();
  const remove = (product) => dispatch(removeItem(product));
  const showModal = () => dispatch(setShowCheckout(true));
  const changeQt = (item, quantity) => dispatch(changeItemQuantity({ item: item, quantity: quantity }));

  return (
    <div className="cart">
      {cart.items.length > 0 ? (
        <>
          <div className="cart-items">
            <h2 className="cart-head">YOUR CART</h2>

            {cart.items.map((item, i) => (
              <div key={i} className="product">
                <Link to={`/products/categories/${item.productCategory.toLowerCase()}}/${item.productSlug}`}>
                  <div className="img-div">
                    <img src={item.productImg} alt="" />
                  </div>
                  <div className="about-product">
                    <p className="product-name">{item.productName}</p>
                    <p className="weight">{item.volume}</p>
                  </div>
                </Link>
                <div className="price">
                  {item.discountPercent ? <p style={{ fontSize: "20px", fontWeight: "300", textDecoration: "line-through" }}>${parseFloat(item.productPrice * item.quantity).toFixed(2)}</p> : ""}

                  <p style={{ fontSize: "25px", fontWeight: "600", margin: "0", color: item.discountPercent ? "red" : "" }}>
                    ${item.discountPercent ? parseFloat((item.productPrice - item.productPrice * (item.discountPercent / 100)) * item.quantity).toFixed(2) : item.productPrice * item.quantity}
                  </p>
                </div>
                <div className="quantity-div">
                  <p>QUANTITY:</p>
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
                  <button>
                    <HighlightOffIcon fontSize="large" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="total">
            <p className="total-par">TOTAL:</p>
            <p className="price-value">$ {String(parseFloat(cart.totalPrice).toFixed(2))}</p>

            <button className="checkout-btn">CHECKOUT</button>
          </div>
        </>
      ) : cart.purchaseComplete ? (
        <>
          <p></p>
          <>
            <h1 style={{ margin: "130px auto 20px auto", display: "flex", alignItems: "center", gap: "30px", fontSize: "70px" }}>Order Complete</h1>
            <h1 style={{ margin: "0 auto 50px auto", display: "flex", alignItems: "center", gap: "30px" }}>Thank You for Shopping With Us!</h1>
            {/* TODO: MAKE CATEGORIES PAGE AND CHANGE LINK TO IT */}
            <Link to="/" style={{ margin: "0 auto" }}>
              <button className="continue-btn">BACK TO STORE</button>
            </Link>
          </>
        </>
      ) : (
        <>
          <h1 style={{ margin: "130px auto 50px auto", display: "flex", alignItems: "center", gap: "30px" }}>
            <RemoveShoppingCartIcon style={{ fontSize: "80px" }} /> YOUR CART IS EMPTY
          </h1>
          {/* TODO: MAKE CATEGORIES PAGE AND CHANGE LINK TO IT */}
          <Link to="/products/categories/protein" style={{ margin: "0 auto" }}>
            <button className="continue-btn">CONTINUE SHOPPING</button>
          </Link>
        </>
      )}

      <Products limit={4} more={false} />
    </div>
  );
};

export default Cart;
