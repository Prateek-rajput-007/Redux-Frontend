import { Provider } from "react-redux";
import { store } from "./redux/store";
import ProductListing from "./pages/ProductListing";

function App() {
  return (
    <Provider store={store}>
      <ProductListing />
    </Provider>
  );
}

export default App;