import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addToCart } from "../products/productsApi";

export const addToCartAsync = createAsyncThunk(
  "cart/addToCartAsync",
  async (productId, { rejectWithValue }) => {
    try {
      const item = await addToCart(productId);
      if (item && item.id && item.title && item.price) {
        return item; // Ensure the item is valid
      }
      throw new Error("Invalid item data");
    } catch (error) {
      return rejectWithValue(error.message); // Handle errors properly
    }
  }
);

const initialState = {
  items: [],
  status: "idle",
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart(state) {
      state.items = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addToCartAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addToCartAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items.push(action.payload); // Append the new item to the cart
      })
      .addCase(addToCartAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload; // Store the error message
      });
  },
});

export const { clearCart } = cartSlice.actions;
export default cartSlice.reducer;