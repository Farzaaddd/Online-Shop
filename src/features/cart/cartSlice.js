import { createSlice } from "@reduxjs/toolkit";
import { sumPrice, sumQuantity } from "../../helper/helper";
import { loadState } from "../../localstorage/localstorage";

// const initialState = {
//   selectedItems: [],
//   itemsCounter: 0,
//   total: 0,
//   checkout: false,
// };

const initialState = loadState();

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      if (!state.selectedItems.find((i) => i.id == action.payload.id)) {
        state.selectedItems.push({ ...action.payload, quantity: 1 });
        state.total = sumPrice(state.selectedItems);
        state.itemsCounter = sumQuantity(state.selectedItems);
        state.checkout = false;
      }
    },

    removeItem: (state, action) => {
      const newSelectedItems = state.selectedItems.filter(
        (i) => i.id !== action.payload.id
      );

      state.selectedItems = newSelectedItems;
      state.total = sumPrice(state.selectedItems);
      state.itemsCounter = sumQuantity(state.selectedItems);
    },

    increaseData: (state, action) => {
      const increaseIndex = state.selectedItems.findIndex(
        (i) => i.id == action.payload.id
      );

      state.selectedItems[increaseIndex].quantity++;
      state.total = sumPrice(state.selectedItems);
      state.itemsCounter = sumQuantity(state.selectedItems);
    },

    decreaseData: (state, action) => {
      const decreaseIndex = state.selectedItems.findIndex(
        (i) => i.id == action.payload.id
      );

      state.selectedItems[decreaseIndex].quantity--;
      state.total = sumPrice(state.selectedItems);
      state.itemsCounter = sumQuantity(state.selectedItems);
    },

    checkout: (state) => {
      state.selectedItems = [];
      state.checkout = true;
      state.total = 0;
      state.itemsCounter = 0;
    },
  },
});

export default cartSlice.reducer;
export const { addItem, removeItem, increaseData, decreaseData, checkout } =
  cartSlice.actions;
