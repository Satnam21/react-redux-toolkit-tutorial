import React from "react";
import { useSelector } from "react-redux";

const CartList = () => {
  const cartSelector = useSelector((state) => state.cart.items);
  // console.log(cartSelector);

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h2>Your Cart Items</h2>
        <span>{cartSelector.length} Items</span>
      </div>
      <hr />
      {cartSelector.length > 0
        ? cartSelector.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="item-info">
                <img src={item.thumbnail} />
                <div className="item-details">
                  <h4>{item.title}</h4>
                  <p>{item.brand}</p>
                </div>
              </div>
              <div className="item-actions">
                <span className="price">${item.price}</span>
                <button className="remove-from-cart-btn">Remove</button>
              </div>
            </div>
          ))
        : null}

        <div className="cart-footer">
          Total Price: {cartSelector.reduce((sum, item) => sum + item.price, 0)}
        </div>
    </div>
  );
};

export default CartList;
