import { useDispatch, useSelector } from "react-redux";
import { setPage, loadProducts } from "../features/products/productsSlice";
import { useEffect } from "react";

const Pagination = () => {
  const dispatch = useDispatch();
  const { page, totalPages } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(loadProducts());
  }, [page, dispatch]);

  return (
    <div className="flex justify-center gap-2 mt-4">
      <button
        onClick={() => dispatch(setPage(page - 1))}
        disabled={page === 1}
        className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
      >
        Previous
      </button>
      <span className="px-4 py-2">Page {page} of {totalPages}</span>
      <button
        onClick={() => dispatch(setPage(page + 1))}
        disabled={page === totalPages}
        className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;