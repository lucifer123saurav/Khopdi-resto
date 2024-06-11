import React from 'react'
import {motion} from "framer-motion";


export const Fcard = (props) => {
  
  return (
    <motion.div 
    initial={{x:"-100%", opacity:0}}
    whileInView={{x:0,opacity:1}}
    transition={{delay:props.dl}}
    className='card'>

        <div>{props.itemnum} </div>
        <main>
        <img src={props.imgsrc} alt={props.itemnum}></img>
        <h3>Rs. {props.price}/-</h3>
        <p>
            {props.des}
        </p>
        <button onClick={() => props.handler(props.itemnum)}>Buy Now</button>

        </main>

       
    </motion.div>
  )
}
