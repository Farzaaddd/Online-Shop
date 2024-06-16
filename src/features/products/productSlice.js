import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/config";

const initialState = {
  loading: false,
  products: [],
  error: "",
};

const fetchData = createAsyncThunk("products/fetchData", () => {
  return api.get("/products");
});

const productSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchData.fulfilled, (state, action) => {
      (state.loading = false),
        (state.products = action.payload),
        (state.error = "");
    });

    builder.addCase(fetchData.rejected, (state, action) => {
      (state.loading = false),
        (state.products = []),
        (state.error = action.error.message);
    });
  },
});

export default productSlice.reducer;
export { fetchData };
