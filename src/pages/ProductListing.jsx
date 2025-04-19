import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadProducts } from "../features/products/productsSlice";
import ProductCard from "../components/ProductCard";
import Filters from "../components/Filters";
import Pagination from "../components/Pagination";
import SortDropdown from "../components/SortDropdown";
import CartSummary from "../components/CartSummary";
import WishlistSummary from "../components/WishlistSummary";

const ProductListing = () => {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(loadProducts());
  }, [dispatch]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Product Catalog</h1>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="md:w-1/4">
          <Filters />
          <CartSummary />
          <WishlistSummary />
        </div>
        <div className="md:w-3/4">
          <div className="mb-4">
            <SortDropdown />
          </div>
          {status === "loading" && <p>Loading...</p>}
          {status === "failed" && <p>Error: {error}</p>}
          {status === "succeeded" && items.length === 0 && (
            <p>No products found.</p>
          )}
          {status === "succeeded" && items.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {items.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default ProductListing;