import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice.jsx";

const Store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default Store;
