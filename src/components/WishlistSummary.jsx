import { useSelector } from "react-redux";

const WishlistSummary = () => {
  const wishlistItems = useSelector((state) => state.wishlist.items);

  return (
    <div className="p-4 bg-gray-100 rounded-lg mt-4">
      <h2 className="text-lg font-semibold mb-4">
        Wishlist ({wishlistItems.length})
      </h2>
      {wishlistItems.length === 0 ? (
        <p>Your wishlist is empty</p>
      ) : (
        <ul>
          {wishlistItems.map((item) => (
            <li key={`${item.id}-${item.title}`} className="mb-2">
              {item.title} - ${item.price.toFixed(2)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default WishlistSummary;
