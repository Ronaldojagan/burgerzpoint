import React,{ useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/front/header/header';
import Routes from './components/front/header/Routes/Route';
import { BrowserRouter as Router } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init()

const App = () => {
  
  const [cartItems,setCartItems] = useState([]);
  
  const handleAddProduct = (product) =>{
    const ProductExist= cartItems.find((item) => item.id === product.id);
    if(ProductExist){
      setCartItems(
        cartItems.map((item) =>
           item.id === product.id
         ? {...ProductExist,quantity: ProductExist.quantity + 1}
          : item
        )
      );
      }else{
        setCartItems([...cartItems, {...product,quantity: 1}]);
      }
    
  };
  const handleRemoveProduct =(product) =>{
    const ProductExist=cartItems.find((item) => item.id === product.id);
    if(ProductExist.quantity === 1){
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    }else{
      setCartItems(
      cartItems.map((item) => item.id === product.id ? {...ProductExist,quantity: ProductExist.quantity - 1} : item)
      )
    }
  }
  const handleCartClearance = () =>{
    setCartItems([]);
  }

  return (
    <>
  <div>
    <Router>
      <Header cartItems={cartItems} />
      <div>hello</div>
      <Routes 
        cartItems={cartItems}
        handleAddProduct={handleAddProduct}
        handleRemoveProduct={handleRemoveProduct}
        handleCartClearance={handleCartClearance}
      />
    </Router>
  </div>
    </>
  );

}

export default App;
