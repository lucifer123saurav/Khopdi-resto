import React from 'react';
import {motion} from "framer-motion";
// import me from "../../assets/xz.webp";
import {Link} from "react-router-dom";
import {MdDashboard} from "react-icons/md"
import { useDispatch,useSelector } from 'react-redux';
import { logout } from "../../redux/actions/user";
import { Loader} from "../layouts/Loader";

export const Profile = () => {
  const options={
    initial:{
      x:"-100%",
      opacity:0
    },
    animate:{
       x:0,
       opacity:1
    }
  }
     
  const dispatch = useDispatch();
  const {loading, user } = useSelector(state=>state.auth);

   const logoutHandler=()=>{
         dispatch(logout());
   }

  return (
    <section className='profile'>
    {
      loading === false ?   <main>
      <motion.img src={user.photo} alt="user" />
      <motion.h5 {...options} transition={{delay:0.3}}>{user.name}</motion.h5>
      {
        user.role === "admn" && 
        <motion.div {...options} transition={{delay:0.5}}>
       <Link to="/admin/dashboard" style={{backgroundColor:'black',borderRadius:'0'}}>
       <MdDashboard/>
       Dashboard
       </Link>

      </motion.div>
      
      }
      <motion.div initial={{x:"100%" ,opacity:0}}
      animate={{x:0,opacity:1}}
      transition={{delay:0.3}}
      >
       <Link to="/myorders">Orders</Link>

      </motion.div>
      <motion.button initial={{x:"100%" ,opacity:0}}
      animate={{x:0,opacity:1}}
      transition={{delay:0.5}}
      onClick={logoutHandler}
      >
        Logout
      </motion.button>
      
     </main> : <Loader /> 
    }
    </section>
  )
}
