import React from 'react'
import {Link} from "react-router-dom"
export const PaymentSuccess = () => {
  return (
    <section className='paymentSuccess'>
    <main>
        <h1>Order Confirmed</h1>
        <p>Order Placed Successfully, You can check order status </p>
        <Link to="/myorders">Check Status</Link>
    </main>

    </section>
  )
}
