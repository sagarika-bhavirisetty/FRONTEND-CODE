import React, { useState, useEffect } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
// import './Product.css';
import axios from "axios";
import "./Demo.css";

const Product = () => {

  const [product, setProduct] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/api/auth/books/bookdata")
      .then(res => res.json())
      .then(
        (result) => {
          console.log('called get items')
          console.log(result)
          setProduct(result);
        },
        (error) => {
          setError(error);
        }
      )
  }, [])

  return (
    <div className="Product">
      <h1 className="ProductHeading">BOOKS</h1>
      <div className="ProductPageContainer">
        {/* <div className="filterContainer">
          <button>Filter</button>
        </div> */}
        <div className="productList">
          {product &&
            product.map((Books) => {
              return (
                <div key={Books.book_id} className="productCard">
                  {/* <img
                    src={Books.book_image}
                    className="productImage"
                  /> */}
                   <img class="boo" src={Books.book_image} />
                  <div>
                    <h4>{Books.book_name} - Rs. {Books.price}/-</h4>
                  </div>
                  <Link to="/cart" product={Books} ><button>Add to cart</button></Link>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Product;