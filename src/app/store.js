import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/products/productSlice";
import cartReducer from "../features/cart/cartSlice";
import { saveState } from "../localstorage/localstorage";

const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
  },
});

store.subscribe(() => {
  saveState({
    selectedItems: store.getState().cart.selectedItems,
    itemsCounter: store.getState().cart.itemsCounter,
    total: store.getState().cart.total,
    checkout: store.getState().cart.checkout,
  });
});

export default store;
