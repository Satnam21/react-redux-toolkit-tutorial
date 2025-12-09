import { Link } from "react-router-dom";
import AddToCart from "../AddToCart/AddToCart";

const Header = () => {
  return (
      <header>
    <div className="logo">MyShop</div>

    <input type="checkbox" id="menu-toggle" />
    <label htmlFor="menu-toggle" className="hamburger">
      ☰
    </label>

    <nav className="nav-links">
      <Link to="/">Home</Link>
      {/* <a href="#">Products</a>
      <a href="#">About</a>
      <a href="#">Contact</a> */}
    </nav>

   <AddToCart />
  </header>


  )
}

export default Header;
