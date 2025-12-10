// import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem, updateQuantity } from "../../store/addToCart";
import { useNavigate } from "react-router-dom";

const CartList = () => {
  const cartItems = useSelector((state) => state.cart.items);
  // console.log(cartSelector);
  const dispatch = useDispatch();

  // const [cartItems, setCartItems] = useState(cartSelector);

  // useEffect(() => {
  //   setCartItems(cartSelector) 
  // }, [cartSelector])

  const navigate = useNavigate();

  const manageQuantity = (id, q) => {
  const quantity = Math.max(1, parseInt(q));
  dispatch(updateQuantity({ id, quantity }));
};

  // const manageQuantity = (id, q) => {
  //   // console.log(id, q);
  //   let quantity = parseInt(q) > 1 ? parseInt(q) : 1;
  //   const cartTempItems = cartItems.map((item) => {
  //     return item.id === id ? { ...item, quantity } : item;
  //   });
  //   // console.log(cartTempItems[0]);
  //   setCartItems(cartTempItems);
  // };

  const handlePlaceOrder = () => {
    localStorage.clear();
    dispatch(clearCart());
    alert("Order Placed Successfully");
    navigate("/");
  }

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h2>Your Cart Items</h2>
        <span>{cartItems.length} Items</span>
      </div>
      <hr />
      {cartItems.length > 0
        ? cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="item-info">
                <img src={item.thumbnail} />
                <div className="item-details">
                  <h4>{item.title}</h4>
                  <p>{item.brand}</p>
                </div>
              </div>
              <div className="item-actions">
                <div className="item-in-cart">
                  <input
                    onChange={(e) => manageQuantity(item.id, e.target.value)}
                    value={item.quantity ? item.quantity : 1}
                    type="number"
                    className="input-quantity"
                    placeholder="Enter Quantity"
                  />
                  <div className="action">
                    <span className="price">
                      $
                      {(item.quantity
                        ? item.price * item.quantity
                        : item.price
                      ).toFixed(2)}
                    </span>
                    <button
                      className="remove-from-cart-btn"
                      onClick={() => dispatch(removeItem(item))}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        : null}

      <div className="cart-footer">
        Total Price: $
        {cartItems
          .reduce(
            (sum, item) =>
              item.quantity
                ? sum + item.price * item.quantity
                : sum + item.price,
            0
          )
          .toFixed(2)}
      </div>
      <button className="add-btn" onClick={handlePlaceOrder}>Place Order</button>
    </div>
  );
};

export default CartList;
