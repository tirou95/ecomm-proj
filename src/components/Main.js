import { useDispatch, useSelector } from 'react-redux';
import { addTocart, emptyToCart, removeToCart } from '../redux/action';
import { productList } from '../redux/productAction';

function Main() {
  const dispatch = useDispatch();
  let data = useSelector((data) => data.productData)
  console.warn("Product List ",data)
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
      <div className="App">
       <button onClick={() => dispatch(productList())}>Call ProductList</button>
      </div>
      <div className='product-container'>
        {
          data.map((item) => <div className='product-item'>
            <img src={item.photo} alt=""/>
            <div>Name : {item.name}</div>
            <div>Color : {item.color}</div>
            <div>Price : {item.price}</div>
            <div>Category : {item.category}</div>
            <div>Brand : {item.brand}</div>
            <div>
          <button onClick={() => dispatch(addTocart(item))}>Add to Cart</button>
          <button onClick={() => dispatch(removeToCart(item.id))}>Remove to Cart</button>
        </div>

            </div>)
        }
      </div>
    </div>

  );
}

export default Main;
