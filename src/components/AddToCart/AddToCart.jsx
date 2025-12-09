import React from 'react'
import { useSelector } from 'react-redux'

const AddToCart = () => {
  const cartSelector = useSelector((state) => state.cart.items);
  // console.log("cartSelector", cartSelector.length);
  
  return (
     <div className="cart">
      <span className="cart-icon">🛒</span>
      <span className="cart-count">{cartSelector.length ? cartSelector.length : 0}</span>
    </div>
  )
}

export default AddToCart
