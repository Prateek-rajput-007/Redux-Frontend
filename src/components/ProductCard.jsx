import { useDispatch, useSelector } from "react-redux";
import { addToCartAsync } from "../features/cart/cartSlice";
import { toggleWishlistAsync } from "../features/wishlist/wishlistSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.items);

  // Check if the current product is in the wishlist
  const isInWishlist = wishlistItems.some((item) => item.id === product.id);

  const handleAddToCart = () => {
    dispatch(addToCartAsync(product.id));
  };

  const handleToggleWishlist = () => {
    dispatch(toggleWishlistAsync(product)); // Pass the entire product object
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-40 object-cover rounded-md mb-4"
      />
      <h3 className="text-lg font-semibold">{product.title}</h3>
      <p className="text-gray-600">${product.price.toFixed(2)}</p>
      <p className="text-yellow-500">Rating: {product.rating} ★</p>
      <p className="text-sm text-gray-500">{product.category}</p>
      <div className="flex justify-between mt-4">
        <button
          onClick={handleAddToCart}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add to Cart
        </button>
        <button
          onClick={handleToggleWishlist}
          className={`text-${isInWishlist ? "red" : "gray"}-500 hover:text-red-600`}
        >
          ♥
        </button>
      </div>
    </div>
  );
};

export default ProductCard;