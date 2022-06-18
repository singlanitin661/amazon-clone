import React from 'react'
import { Link } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
 import './Payment.css'
import { useStateValue } from './StateProvider'
import {CardElement, useStripe,useElements} from "@stripe/react-stripe-js"

function Payment() {
    const[{basket,user},dispatch]=useStateValue();
//   react hook elements
    const stripe=useStripe();
  const elements=useElements();  
  return (
    <div className='payment'>
        <div className='payment__container'>
            <h1>
                Checkout (<Link to="/checkout">{basket?.length} Items</Link>)
            </h1>
       
       {/* payment section delievery address */}
        <div className='payment__section'>
            <div className='payment__title'>
            <h3>Delivery Address</h3>
            </div>
            <div className='payment__address'>
                <p>{user?.email} </p>
                <p>123 React Lane</p>
                <p>Los Angeles,CA</p>
            </div>
        </div>


         {/* payment section review items */}
        <div className='payment__section'>
            <div className='payment__title'>
                <h3>Review Items and Delievery</h3>

            </div>
            <div className='payment__items'>
                {basket.map(item=>(
                    <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    
                    />
                ))}
            </div>
        </div>


        <div className='payment__section'>
            <div className="payment__title">
                <h3>Payment Method</h3>
            </div>
            <div className="payment__details">
                {/* stripe magic will go */}

                <form >
                    <CardElement/>
                </form>
              </div>
        </div>


        </div>
    </div>
  )
}

export default Payment