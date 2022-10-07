import { useEffect, useState } from 'react';
// import '../Css/CartStyle.css';
// import '../Css/Home.css';
import { useNavigate } from 'react-router-dom';


function CartList({ cart }) {
    let navigate=useNavigate();

    const submitHandler = e =>{
        e.preventDefault()
        window.location.href='/payment';
    }

    const [CART, setCART] = useState([])

    useEffect(() => {
        setCART(cart)
    }, [cart])

    return (
        <div className='cart'>
            {
                CART?.map((cartItem, cartindex) => {
                    return (
                        <div>
                            <img class="boo" src={cartItem.url} width={40} />
                            <h1> {cartItem.name} </h1>
                            <button
                                onClick={() => {
                                    const _CART = CART.map((item, index) => {
                                        return cartindex === index ? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 } : item
                                    })
                                    setCART(_CART)
                                }}
                            >-</button>
                            <span> {cartItem.quantity} </span>
                            <button
                                onClick={() => {
                                    const _CART = CART.map((item, index) => {
                                        return cartindex === index ? { ...item, quantity: item.quantity + 1 } : item
                                    })
                                    setCART(_CART)
                                }}
                            >+</button>
                            <h1> Rs. {cartItem.price * cartItem.quantity} </h1>
                        </div>
                    )
                })
            }

            <br></br><p><h1> TOTAL PRICE</h1> <span></span>
                {
                     
                     CART.map(item => item.price * item.quantity).reduce((total, value) => total + value, 0)

                }
            </p>
            <br></br><div className='btn'>
            {/* <button onClick={submitHandler}>Check Out</button> */}
            <button  class="test" onClick={()=>{navigate("/payment")}}> CHECKOUT</button>

            </div>
        </div >
    )
}

export default CartList