import React, { useState } from 'react'
import {Country,State} from "country-state-city"
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
export const Shiping = () => {
     
       const {shippingInfo} = useSelector((state) => state.cart);

    const [hNo,sethNo] = useState(shippingInfo.hNo);
    const [city,setCity] = useState(shippingInfo.city);
    const [country,setCountry] = useState(shippingInfo.country);
    const [state,setState] = useState(shippingInfo.state);
    const [pinCode,setpinCode] = useState(shippingInfo.pinCode);
    const [phoneNo,setphoneNo] = useState(shippingInfo.phoneNo);
     const dispatch = useDispatch();
    const nevigate = useNavigate();

     const submitHandler = (e) => {
          e.preventDefault();
         dispatch({
            type:"addShipingInfo",
            payload:{
                hNo,
                city,
                country,
                state,
                pinCode,
                phoneNo
            }
         });
         
         localStorage.setItem("shipingInfo",JSON.stringify({
            hNo,
            city,
            country,
            state,
            pinCode,
            phoneNo
         }));
         nevigate("/confirmorder");
     }

  return (
    <section className='shiping'>

    <main>
    <h1>Shiping Detail</h1>
    <form onSubmit={submitHandler}>
  
     <div>
        <label>House no.</label>
        <input
         type={"text"} 
         placeholder=" Enter House No." 
         value={hNo}
         onChange={(e) => sethNo(e.target.value)}
         />
     </div>
     <div>
     <label>City</label>
        <input
         type={"text"}
         placeholder="Enter city"
         value={city}
         onChange={(e) => setCity(e.target.value)}
           />
     </div>
     <div>
     <label>Country</label>
        <select
        value={country}
         onChange={(e) => setCountry(e.target.value)}
        >
            <option>Country</option>
            {
                Country && Country.getAllCountries().map(i=>(
                    <option value={i.isoCode } key={i.isoCode}>{i.name}</option>
                ))
            }
        </select>
     </div>
     {
        country && 
        <div>
     <label>State</label>
        <select 
        value={state}
         onChange={(e) => setState(e.target.value)}
        >
            <option>State</option>
            
            {
                State && State.getStatesOfCountry(country).map(i=>(
                    <option value={i.isoCode } key={i.isoCode}>{i.name}</option>
                ))
            }
        </select>
     </div>
     }
    
     <div>
        <label>Pin Code</label>
        <input 
        type={"text"} 
        placeholder=" Enter pin code"
        value={pinCode}
        onChange={(e) => setpinCode(e.target.value)}
         />
     </div>
     <div>
        <label>Phone no.</label>
        <input 
        type='text' 
        placeholder=" Enter phone no." 
        value={phoneNo}
         onChange={(e) => setphoneNo(e.target.value)}   
        />
     </div>
      <button type='submit' >Confirm Order</button>
            
    </form>
    </main>

    </section>
  )
}
