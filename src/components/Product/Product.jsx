import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../../store/addToCart";
import { useEffect } from "react";
import { fetchProducts } from "../../store/productSlice";

const Product = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const products = useSelector((state) => state.products.items);
  console.log("products", products);

  return (
     <div className="product-grid">
      {products?.map((item) => (
        <div className="product-card" key={item.id}>
          <img className="product-img" src={item.thumbnail} alt={item.title} />

          <div className="product-info">
            <h3 className="product-title">{item.title}</h3>
            <p className="product-category">{item.category}</p>
            <p className="product-brand">{item.brand}</p>
            <p className="product-price">₹ {item.price}</p>

            <button className="add-btn" onClick={() => dispatch(addItem())}>Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
