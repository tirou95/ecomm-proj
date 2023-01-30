import { useDispatch } from 'react-redux';
import { addTocart, emptyToCart, removeToCart } from '../redux/action';

function Main() {
  const dispatch = useDispatch();
  const product = {
    name: 'i Phone',
    category: 'mobile',
    price: 1000000,
    color: 'red'
  }
  return (
    <div className="App">
     <button onClick={() => dispatch(addTocart(product))}>Add To Cart</button>
      <div className="App">
      <button onClick={() => dispatch(removeToCart(product))}>Remove from Cart</button>
     </div>
       <div className="App">
       <button onClick={() => dispatch(emptyToCart())}>Empty To Cart</button>
      </div>
    </div>

  );
}

export default Main;
