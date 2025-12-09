import { useDispatch } from 'react-redux';
import { addItem } from '../../store/addToCart';

const Product = (props) => {
    const dispatch = useDispatch();

  return (
    <div>
       <div className="product-card">
      <img
        src={props.image}
        alt="Product"
        className="product-image"
      />

      <h3 className="product-title">{props.name}</h3>

      <p className="product-price">{props.price}</p>

      <button className="add-btn" onClick={() => dispatch(addItem(1))}>Add to Cart</button>
    </div>
    </div>
  )
}

export default Product;
