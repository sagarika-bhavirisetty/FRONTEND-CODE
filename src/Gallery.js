import React from 'react';
import './Home.css';

function Gallery({ gallery,addToCart }) {
    return (
        <div className='flex'>
            {
                gallery.map((galleryItem, galleryIndex) => {
                    return (
                        <div style={{ width: '33%' }}>
                            <div className='gallery-item'>
                                <img class="boo" src={galleryItem.url} width="100%" />
                                {<p>BOOK NAME:{galleryItem.name}  </p> }
                                {/* <p> {galleryItem.seller} </p> */} 
                                <p> PRICE: {galleryItem.price} /-</p>
                                <button
                                    onClick={() => addToCart(galleryItem)}
                                >Add To Cart</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Gallery;