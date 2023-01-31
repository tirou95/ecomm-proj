import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

function Header() {
  const result = useSelector((state) => state.cartData);
  console.warn("data in header", result);
  return ( 
    <div className="header">
      <Link to="/cart">
      <div className="cart-div">
         <span>{result.length}</span>
         <img src="https://cdn-icons-png.flaticon.com/512/263/263142.png"/>
      </div>
      </Link>
    </div>
  )
}

export default Header
