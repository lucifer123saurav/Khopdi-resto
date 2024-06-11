import React from 'react'
import{motion} from "framer-motion";
import bulb from "../../assets/bulb.png"
export const Contact = () => {
  return (
    <section className='contact'>
        
        <motion.form
        initial={{x:"-100vw" ,opacity:0}}
        animate={{x:0,opacity:1}}
        transition={{delay:0.2}}
        >
        <h2>Contact us</h2>
          <input type={'text'} placeholder='Full Name'></input>
          <input type={'email'} placeholder='Email'></input>
          <textarea placeholder='Message....' cols='30' rows='10'></textarea>
          <button>Send</button>
        </motion.form>

        <motion.div className='formBorder'
        initial={{x:"100vw" ,opacity:0}}
        animate={{x:0,opacity:1}}
        transition={{delay:0.2}}
        >
         <motion.div
         initial={{x:"100vw" ,opacity:0}}
        animate={{x:0,opacity:1}}
        transition={{delay:0.5}}
         >
            <img src={bulb} alt='cr_blb'></img>
         </motion.div>
        </motion.div>
    </section>
  )
}
