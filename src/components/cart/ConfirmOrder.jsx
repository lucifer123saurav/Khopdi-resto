import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from "react-redux";
import { createOrder, paymentVerification } from '../../redux/actions/order';
import {toast} from "react-hot-toast";
import { useNavigate} from "react-router-dom";
import axios from 'axios';
import { server }from "../../redux/store"

export const ConfirmOrder = () => {


  // shippingInfo,
  // orderItems,
  // paymentMethod,
  // itemsPrice,
  // taxPrice,
  // shippingCharges,
  // totalAmount

  const [paymentMethod,setpaymentMethod] = useState("");
  const [disableBtn,setdisableBtn] = useState(false);
  const dispatch = useDispatch();
 
  const nevigate = useNavigate();
const {cartItems,
  subTotal,
  tax,
  shippingCharges,
  total,
  shippingInfo} = useSelector(state => state.cart)

  const {message,error} = useSelector(state => state.order);
  const submitHandler = async(e) => {
    e.preventDefault();

    setdisableBtn(true);

    if(paymentMethod === "COD"){
          dispatch(createOrder(shippingInfo,cartItems,paymentMethod,subTotal,tax,shippingCharges,total));
         
    }
    else{
      //createorderonline

       
      const {data:{
        order,orderOptions
      }}= await axios.post(`${server}/createorderonline`,{
        shippingInfo,
        orderItems:cartItems,
        paymentMethod,
        itemsPrice:subTotal,
        taxPrice:tax,
        shippingCharges,
        totalAmount:total
       },{
        headers:{
            "Content-Type":"application/json"
        },
        withCredentials:true
       })

       const options = {
        key: "rzp_test_h83ts1VJly6o1Y", // Enter the Key ID generated from the Dashboard
        amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: "INR",
        name: "Khopadi Resto", //your business name
        description: "Resto",
        order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        handler: function (response){
           
            const {razorpay_payment_id,razorpay_order_id,razorpay_signature} =  response;
  
            dispatch(paymentVerification(razorpay_payment_id,razorpay_order_id,razorpay_signature,orderOptions));
        },
        theme: {
            color: "#3399cc"
        }
    };
    const razorpay = new window.Razorpay(options);
    razorpay.open();
    razorpay.on('payment.failed', function (response){
            alert(response.error.code);
            alert(response.error.description);
            alert(response.error.source);
            alert(response.error.step);
            alert(response.error.reason);
            alert(response.error.metadata.order_id);
            alert(response.error.metadata.payment_id);
    });
    
  
    };

    

  }


  useEffect(() => {
    if(message){
      toast.success(message);
      dispatch({type:"clearMessage"});
      dispatch({type:"emptyState"});
      nevigate("/paymentsuccess");
    }
    if(error){
      toast.error(error);
      dispatch({type:"clearError"});
      setdisableBtn(false);
    }
  },[dispatch,message,nevigate,error]);



  
  return (
         <section className='confirmOrder'>
          <main>
            <h1>
                Confirm Order
            </h1>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Cash On Delivery</label>
                    <input type="radio" name="payment" onChange={()=>setpaymentMethod("COD")} required></input>
                </div>
                <div>
                    <label>Online</label>
                    <input type="radio" name="payment" onChange={()=>setpaymentMethod("Online")}></input>
                </div>
                <button disabled = {disableBtn} type='submit'>Place Order</button>
            </form>
          </main>
         </section>
  )
}
