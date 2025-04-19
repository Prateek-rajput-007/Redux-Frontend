import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addToWishlist } from "../products/productsApi";

export const toggleWishlistAsync = createAsyncThunk(
  "wishlist/toggleWishlistAsync",
  async (product, { getState }) => {
    const { wishlist } = getState();
    const isAlreadyInWishlist = wishlist.items.some((item) => item.id === product.id);

    if (isAlreadyInWishlist) {
      // Remove the item from the wishlist
      return wishlist.items.filter((item) => item.id !== product.id);
    } else {
      // Add the new item to the wishlist
      const newItem = await addToWishlist(product.id);
      return [...wishlist.items, { ...product, ...newItem }];
    }
  }
);

const initialState = {
  items: [],
  status: "idle",
  error: null,
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(toggleWishlistAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(toggleWishlistAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload; // Update the wishlist with the new state
      })
      .addCase(toggleWishlistAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default wishlistSlice.reducer;