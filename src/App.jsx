import { useDispatch } from "react-redux";
import "./App.css";
import Header from "./components/Header/Header";
import Product from "./components/Product/Product";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartList from "./components/CartList/CartList";
// import { clearCart } from "./store/addToCart";

function App() {
  const dispatch = useDispatch();

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Product />}></Route>
          <Route path="/cart" element={<CartList />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
