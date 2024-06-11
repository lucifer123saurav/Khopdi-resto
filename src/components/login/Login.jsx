import React from 'react'
import {motion} from "framer-motion";
import {FcGoogle} from "react-icons/fc";
import {server} from "../../redux/store";

export const Login = () => {
  const loginHandler = () => {
    window.open(`${server}/googlelogin`,"_self")
  }
  return (
    <section className='login'>
   <motion.button  onClick={
    loginHandler
   }>
     Login with Google
     <FcGoogle/>
   </motion.button>

    </section>
  )
}
