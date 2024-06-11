import React from 'react'
import {GiHappySkull} from "react-icons/gi"
import { motion } from 'framer-motion';
export const Loader = () => {
 const options={
  initial:{opacity:0},
        animate:{opacity:1},
        transition:{
          ease:"linear",
          repeat:Infinity,  
          repeatType:"reverse"
      
    }}
       
  return (
    <div className='loader'>
      <GiHappySkull />
      <div>
        <motion.p  {...options} >
          Loading...
        </motion.p>
      </div>
    </div>
  )
}
