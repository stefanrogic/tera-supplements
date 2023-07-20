import { createSlice } from "@reduxjs/toolkit";

const setLocalStorage = (name, value) => localStorage.setItem(name, value);

const calculateTotal = (items) => {
  let total = 0;

  items.map((item) => {
    const price = item.discountPercent ? item.productPrice - item.productPrice * (item.discountPercent / 100) : item.productPrice;

    total += price * item.quantity;
  });

  return total;
};

const checkItemCart = (item, cart) => {
  const found = cart.find((a) => a.productSlug === item.productSlug);
  return cart.includes(found);
};

const changeQuantity = (item, cart, quantity = 1) => {
  return cart.map((a) => {
    if (a.productSlug === item.productSlug) {
      return { ...a, quantity: a.quantity + quantity };
    } else return a;
  });
};

const initialState = {
  navNum: JSON.parse(localStorage.getItem("navNum")) || 0,
  items: JSON.parse(localStorage.getItem("cart")) || [],
  totalPrice: JSON.parse(localStorage.getItem("totalPrice")) || 0,
  showCheckout: false,
  purchaseComplete: false,
};

export const cartSlice = createSlice({
  name: "cartItems",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const isInCart = checkItemCart(action.payload, state.items);

      if (isInCart) {
        state.items = changeQuantity(action.payload, state.items, action.payload.quantity);
      } else {
        state.items = [...state.items, action.payload];
        state.navNum += 1;
      }

      state.totalPrice = calculateTotal(state.items);

      [
        { name: "cart", value: state.items },
        { name: "totalPrice", value: state.totalPrice },
        { name: "navNum", value: state.navNum },
      ].map((storage) => setLocalStorage(storage.name, JSON.stringify(storage.value)));

      setLocalStorage("cart", JSON.stringify(state.items));
    },
    removeItem: (state, action) => {
      const newArr = state.items.filter((a) => a.productSlug !== action.payload.productSlug);

      state.items = [...newArr];
      state.navNum -= 1;
      state.totalPrice = calculateTotal(state.items);

      [
        { name: "cart", value: state.items },
        { name: "totalPrice", value: state.totalPrice },
        { name: "navNum", value: state.navNum },
      ].map((storage) => setLocalStorage(storage.name, JSON.stringify(storage.value)));
    },
    clearCart: (state) => {
      state.items = [];
      state.navNum = 0;
      state.totalPrice = 0;

      [
        { name: "cart", value: state.items },
        { name: "totalPrice", value: state.totalPrice },
        { name: "navNum", value: state.navNum },
      ].map((storage) => setLocalStorage(storage.name, JSON.stringify(storage.value)));

      setLocalStorage("cart", JSON.stringify(state.items));
    },
    changeItemQuantity: (state, action) => {
      // console.log(state.items, action.payload.item, action.payload.quantity);
      // changeQuantity(action.payload.item, state.items, action.payload.quantity);

      const newArr = state.items.map((a) => {
        if (a.productSlug === action.payload.item.productSlug) {
          return { ...a, quantity: action.payload.quantity };
        } else return a;
      });

      state.items = newArr;
      state.totalPrice = calculateTotal(state.items);

      [
        { name: "cart", value: state.items },
        { name: "totalPrice", value: state.totalPrice },
      ].map((storage) => setLocalStorage(storage.name, JSON.stringify(storage.value)));
    },
    setShowCheckout: (state, action) => {
      state.showCheckout = action.payload;
    },
    setPurchaseComplete: (state) => {
      state.purchaseComplete = true;
    },
  },
});

export const { addItem, removeItem, clearCart, changeItemQuantity, setShowCheckout, setPurchaseComplete } = cartSlice.actions;
export default cartSlice.reducer;
