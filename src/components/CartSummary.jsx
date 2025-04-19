import { useSelector } from "react-redux";

const CartSummary = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className="p-4 bg-gray-100 rounded-lg mt-4">
      <h2 className="text-lg font-semibold mb-4">Cart ({cartItems.length})</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems
            .filter((item) => item && item.title && item.price) // Validate items
            .map((item) => (
              <li key={item.id} className="mb-2">
                {item.title} - ${item.price.toFixed(2)}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default CartSummary;