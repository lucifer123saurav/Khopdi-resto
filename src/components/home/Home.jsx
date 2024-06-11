import React from 'react'
import {motion} from "framer-motion";
import { Founder } from './Founder';
import { Featured } from './Featured';

export const Home = () => {


  const options ={
       initial:{
        x:"-100%",
        opacity:0
       },
       whileInView:{
        x:0,
        opacity:1
       }
  };



  return (
    <div>
    <section className='home'>
      <div>
        <motion.h1 {...options}>Khopadi Resto</motion.h1>
        <motion.p {...options} transition={{delay:0.2}}>Try Burger and Pizza in Different Way</motion.p>
      </div>

      <motion.a  initial={{y:"-100%", opacity:0}}
      whileInView={{y:0,opacity:1}}
      transition={{delay:0.4}}
      href='#featured'> Explore Now
      </motion.a>
      
    </section>
    <Founder/>
    <Featured />
    
    </div>
  )
}
