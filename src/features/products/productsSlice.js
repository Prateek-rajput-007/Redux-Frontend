import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProducts } from "./productsApi";

const initialState = {
  items: [],
  status: "idle",
  error: null,
  page: 1,
  limit: 6,
  total: 0,
  totalPages: 1,
  categories: [],
  priceRange: [0, 2000],
  sort: "latest",
};

export const loadProducts = createAsyncThunk(
  "products/loadProducts",
  async (_, { getState }) => {
    const { products } = getState();
    return await fetchProducts(
      products.page,
      products.limit,
      products.categories,
      products.priceRange,
      products.sort
    );
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setPage(state, action) {
      state.page = action.payload;
    },
    setCategories(state, action) {
      state.categories = action.payload;
      state.page = 1;
    },
    setPriceRange(state, action) {
      state.priceRange = action.payload;
      state.page = 1;
    },
    setSort(state, action) {
      state.sort = action.payload;
      state.page = 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loadProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload.products;
        state.total = action.payload.total;
        state.totalPages = Math.ceil(action.payload.total / action.payload.limit);
      })
      .addCase(loadProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to load products";
      });
  },
});

export const { setPage, setCategories, setPriceRange, setSort } = productsSlice.actions;
export default productsSlice.reducer;