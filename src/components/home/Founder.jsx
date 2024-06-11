import React from 'react'
import {motion} from "framer-motion"
import me from "../../assets/xz.jpeg"
export const Founder = () => {
  return <section className='founder'>
  <motion.div>
  <img src={me} alt='me' height={200} width={200}></img>
  <h3>Saurav Suman</h3>
  <p>
    Hey, I am Saurav Suman, the founder of Khopadi Resto.
    <br />
    Our aim is to provide you best experience in taste of Burger ,Pizza .
  </p>
  </motion.div>
    
  </section>
}
