import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import deco1 from "../../assets/deco1.png";
import deco2 from "../../assets/deco2.png";
import { Link } from 'react-router-dom';
const CartItem = ({value,title,img,increment,decrement})=>{
  return (
    <div className='cartItem'>
    <div>
      <h4>{title}</h4>
      <img src={img} alt='cartImg' />
    </div>

    <div>
      <button onClick={decrement}>-</button>
      <input type="number" readOnly value={value} />
      <button onClick={increment}>+</button>
    </div>

    </div>
  )
}
export const Cart = () => {
    const {cartItems:{
           cheeseBurger:{
            quantity:cheeseBurger
           },
           specialPizza:{
             quantity:specialPizza
           },
           regularBurger:{
             quantity:regularBurger
           },
           regularPizza:{
             quantity:regularPizza
           }
    },
     subTotal,
    tax,
    shippingCharges,
    total
  
  } = useSelector((state)=>state.cart);

  const {cartItems:orderItems}= useSelector((state)=>state.cart);

  const dispatch = useDispatch();

  const increment=(item)=>{
    switch (item) {
      case 1:
        
        dispatch({type:"cheeseBurgerIncrement"});
        dispatch({type:"calculatePrice"});
        break;
      case 2:
        dispatch({type:"regularBurgerIncrement"});
        dispatch({type:"calculatePrice"});
        break;
     case 3:
        dispatch({type:"specialPizzaIncrement"});
        dispatch({type:"calculatePrice"});
        break;
     case 4:
        dispatch({type:"regularPizzaIncrement"});
        dispatch({type:"calculatePrice"});
        break;         
      default:
        break;
    }
  };
  const decrement=(item)=>{
    switch (item) {
      case 1:
        if(cheeseBurger === 0) break; 
        dispatch({type:"cheeseBurgerDecrement"});
        dispatch({type:"calculatePrice"});
        break;
      case 2:
        if(regularBurger === 0) break;
        dispatch({type:"regularBurgerDecrement"});
        dispatch({type:"calculatePrice"});
        break;
     case 3:
      if(specialPizza === 0) break;
        dispatch({type:"specialPizzaDecrement"});
        dispatch({type:"calculatePrice"});
        break;
     case 4:
      if(regularPizza === 0) break;
        dispatch({type:"regularPizzaDecrement"});
        dispatch({type:"calculatePrice"});
        break;         
      default:
        dispatch({type:"cheeseBurgerDecrement"});
        dispatch({type:"calculatePrice"});
        break;
    }
  
  }

  useEffect(() => {
    localStorage.setItem("cartItems",JSON.stringify(orderItems));
    localStorage.setItem("cartPrices",JSON.stringify({
      subTotal,
      tax,
      shippingCharges,
      total
    }));
  },[orderItems, subTotal,  tax, shippingCharges, total])


  return (
    <section className='cartpage'>
     <main>
      <CartItem title={"cheese Burger"} img={deco1} value={cheeseBurger}
        increment={()=>increment(1)}
        decrement={()=>decrement(1)}
      />
      <CartItem title={"Special Pizza"} img={deco2} value={specialPizza} 
        increment={()=>increment(3)}
        decrement={()=>decrement(3)}
      />
      <CartItem title={"regular Pizza"} img={deco2} value={regularPizza} 
        increment={()=>increment(4)}
        decrement={()=>decrement(4)}
      />
      <CartItem title={"regular Burger"} img={deco2} value={regularBurger} 
        increment={()=>increment(2)}
        decrement={()=>decrement(2)}
      />
      <article>
        <div>
          <h4>Sub Total</h4>
          <p>Rs {subTotal}</p>
        </div>
        <div>
          <h4>Tax</h4>
          <p>Rs {tax}</p>
        </div>
        <div>
          <h4>Shipping Charges</h4>
          <p>Rs {shippingCharges}</p>
        </div>
        <div>
          <h4>Total</h4>
          <p>Rs {total}</p>
        </div>
        <Link to='/shiping'>Checkout</Link>
      </article>
     </main>
    </section>
  )
}

