import axios from "axios";

export const fetchProducts = async (
  page,
  limit,
  categories,
  priceRange,
  sort
) => {
  const response = await axios.get("https://redux-backend-0gjq.onrender.com/api/products", {
    params: {
      page,
      limit,
      category: categories.join(","),
      minPrice: priceRange[0],
      maxPrice: priceRange[1],
      sort: sort === "price-low-high" ? "priceLowToHigh" : sort === "price-high-low" ? "priceHighToLow" : sort,
    },
  });
  return response.data; // Returns { products, total, page, limit }
};

export const addToCart = async (productId) => {
  try {
    const response = await axios.post("https://redux-backend-0gjq.onrender.com/api/cart", {
      productId,
    });
    // console.log("API Response:", response.data); // Log the API response for debugging

    const cart = response.data.cart; // Extract the cart array
    if (Array.isArray(cart) && cart.length > 0) {
      return cart[cart.length - 1]; // Return the last added item
    }

   
    throw new Error("Invalid cart data from API");
  } catch (error) {
    console.error("Error adding to cart:", error.message);
    throw error;
  }
};

export const addToWishlist = async (productId) => {
  try {
    const response = await axios.post("https://redux-backend-0gjq.onrender.com/api/wishlist", {
      productId,
    });
    return response.data.wishlist; // Return the updated wishlist
  } catch (error) {
    console.error("Error adding to wishlist:", error.message);
    throw error;
  }
};