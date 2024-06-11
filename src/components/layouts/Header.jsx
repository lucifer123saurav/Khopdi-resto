import React from 'react'
import {GiHappySkull} from "react-icons/gi"
import { Link } from 'react-router-dom'
import {FiShoppingCart,FiLogIn} from "react-icons/fi"
import {FaUser} from "react-icons/fa";
import {motion} from "framer-motion"

export const Header = ({isAuthenticated}) => {
  return <nav>
   <motion.div
   initial={{x:"-100%"}}
   whileInView={{x:"0%"}}
   >
    <GiHappySkull />
   </motion.div>
   <div>
    <Link to="/">Home</Link>
    <Link to="/contact">Contact</Link>
    <Link to="/about">About</Link>
    <Link to="/cart"><FiShoppingCart /></Link>
    <Link to={isAuthenticated? "/me":"/login"}>
        {isAuthenticated ? <FaUser /> : <FiLogIn />}
    </Link>
   </div>
  </nav>
}
