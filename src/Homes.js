import React from 'react';
import Gallery from './Gallery';
import Header1 from './Header1';
import CartList from './CartList';
import './Home.css';
import { useState } from 'react';
import book1 from './imagess/book1.png';
import book2 from './imagess/book2.png';
import book from './imagess/book.png';


function Homes() {

    const [gallery, setGallery] = useState([
      {
        url: book,
        name:"FACTS ON ANIMALS AND BIRDS",
       
        price: 500
      },
      {
        url: book1,
        name:" ANIMALS AND BIRDS",
        
        price: 500
      },
      {
        url: book2,
        name:" KNOWLEGE ENCYCLOPEDIA",
        price: 1000
      },
      
      
    ])
    const [cart, setCart] = useState([])
    const [showCart, setShowCart] = useState(false)
  
    const addToCart = (data) => {
      setCart([...cart, { ...data, quantity: 1 }])
    }
  
    const handleShow = (value) => {
      setShowCart(value)
    }
  
    return (
      <div>
        <Header1 count={cart.length}
          handleShow={handleShow} ></Header1>
  
        {
          showCart ?
            <CartList cart={cart} ></CartList> :
            <Gallery gallery={gallery} addToCart={addToCart} ></Gallery>
        }
  
  
      </div>
    );
  }
  
  export default Homes;