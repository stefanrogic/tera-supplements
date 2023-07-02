import { configureStore } from "@reduxjs/toolkit";

import heroSectionSliceReducer from "./slices/heroSectionSlice";
import cartSliceReducer from "./slices/cartSlice";

export default configureStore({
  reducer: { heroSectionPage: heroSectionSliceReducer, cartItems: cartSliceReducer },
});
