import React from 'react'
import { useSelector } from 'react-redux'

const AddToCart = () => {
  const counter = useSelector((state) => state.cart.value);
  // console.log("counter", counter);
  
  return (
     <div className="cart">
      <span className="cart-icon">🛒</span>
      <span className="cart-count">{counter}</span>
    </div>
  )
}

export default AddToCart
