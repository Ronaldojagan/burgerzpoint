import React from 'react';
import Home from '../home/home';
import About from '../../about/about'
import Products from '../../product/shop';
import { Route,Routes } from 'react-router-dom'
import Cart from '../../cart/cart';
const Rout = ({
  productItems,
  cartItems,
  handleAddProduct,
  handleRemoveProduct,
  handleCartClearance,
}) => {
  return (
    <div>
        <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="shop" exact element={<Products productItems={productItems} handleAddProduct={handleAddProduct} />} />
            <Route path='about' exact element={<About />} />
            <Route path="cart" exact element={<Cart cartItems={cartItems}
             handleAddProduct={handleAddProduct}
             handleRemoveProduct={handleRemoveProduct}
             handleCartClearance={handleCartClearance}
             />} />
        </Routes>
    </div>
  )
}

export default Rout;