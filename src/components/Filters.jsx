import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategories, setPriceRange, loadProducts } from "../features/products/productsSlice";
import Slider from "react-slider";

const Filters = () => {
  const dispatch = useDispatch();
  const { categories, priceRange } = useSelector((state) => state.products);
  const [localCategories, setLocalCategories] = useState(categories);
  const [localPriceRange, setLocalPriceRange] = useState(priceRange);

  const availableCategories = ["Electronics", "Footwear", "Clothing"];

  useEffect(() => {
    dispatch(loadProducts());
  }, [categories, priceRange, dispatch]);

  const handleCategoryChange = (category) => {
    const updated = localCategories.includes(category)
      ? localCategories.filter((c) => c !== category)
      : [...localCategories, category];
    setLocalCategories(updated);
    dispatch(setCategories(updated));
  };

  const handlePriceChange = (values) => {
    setLocalPriceRange(values);
  };

  const applyPriceRange = () => {
    dispatch(setPriceRange(localPriceRange));
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Filters</h2>
      <div className="mb-4">
        <h3 className="font-medium">Categories</h3>
        {availableCategories.map((category) => (
          <label key={category} className="block">
            <input
              type="checkbox"
              checked={localCategories.includes(category)}
              onChange={() => handleCategoryChange(category)}
              className="mr-2"
            />
            {category}
          </label>
        ))}
      </div>
      <div>
        <h3 className="font-medium">Price Range</h3>
        <Slider
          className="w-full h-6 my-4"
          thumbClassName="w-6 h-6 bg-blue-500 rounded-full cursor-pointer -top-2"
          trackClassName="h-2 bg-gray-300 rounded"
          value={localPriceRange}
          onChange={handlePriceChange}
          min={0}
          max={2000}
          step={10}
          pearling
          minDistance={10}
        />
        <div className="flex justify-between text-sm text-gray-600">
          <span>${localPriceRange[0]}</span>
          <span>${localPriceRange[1]}</span>
        </div>
        <button
          onClick={applyPriceRange}
          className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default Filters;