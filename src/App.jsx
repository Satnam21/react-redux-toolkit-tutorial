import { useDispatch } from "react-redux";
import "./App.css";
import Header from "./components/Header/Header";
import Product from "./components/Product/Product";
// import { clearCart } from "./store/addToCart";

function App() {
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <Header />
        <Product />
      </div>
    </>
  );
}

export default App;
