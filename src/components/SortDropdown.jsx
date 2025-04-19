import { useDispatch, useSelector } from "react-redux";
import { setSort, loadProducts } from "../features/products/productsSlice";
import { useEffect } from "react";

const SortDropdown = () => {
  const dispatch = useDispatch();
  const sort = useSelector((state) => state.products.sort);

  useEffect(() => {
    dispatch(loadProducts());
  }, [sort, dispatch]);

  return (
    <select
      value={sort}
      onChange={(e) => dispatch(setSort(e.target.value))}
      className="border p-2 rounded"
    >
      <option value="latest">Latest</option>
      <option value="price-low-high">Price: Low to High</option>
      <option value="price-high-low">Price: High to Low</option>
    </select>
  );
};

export default SortDropdown;