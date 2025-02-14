import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { Home } from "./components/home/Home";
import { Header } from "./components/layouts/Header";
import { Footer } from "./components/layouts/Footer";
import { Contact } from "./components/contact/Contact";
import { Cart } from "./components/cart/Cart";
import { Shiping} from "./components/cart/Shiping";
import {ConfirmOrder} from  "./components/cart/ConfirmOrder";
import { PaymentSuccess } from  "./components/cart/PaymentSuccess";
import { Login } from "./components/login/Login";
import { Profile } from "./components/login/Profile";
import {MyOrders } from "./components/myorders/MyOrders";
import {OrderDetails } from "./components/myorders/OrderDetails";
import {Dashboard } from "./components/admin/Dashboard";
import {Users}  from "./components/admin/Users";
import {Orders} from "./components/admin/Orders";
import {About} from "./components/about/About";
import { NotFound } from "./components/layouts/NotFound";
import { useEffect } from "react";
import { useDispatch,useSelector} from "react-redux";
import {loadUser} from "./redux/actions/user"
import toast, { Toaster} from "react-hot-toast";
import {ProtectedRoute} from "protected-route-react"


import "./styles/app.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/founder.scss";
import "./styles/footer.scss";

import "./styles/featured.scss";
import "./styles/app.scss";
import "./styles/contact.scss";
import "./styles/cart.scss";
import "./styles/shiping.scss";
import "./styles/confirmOrder.scss";
import "./styles/paymentSuccess.scss";
import "./styles/login.scss";
import "./styles/profile.scss";
import "./styles/table.scss";
import "./styles/orderDetails.scss";
import "./styles/dashboard.scss";
import "./styles/about.scss";




function App() {
  const dispatch = useDispatch();  // Need to understand
  const {error,message,isAuthenticated,user} = useSelector(state=>state.auth)

  useEffect(()=>{
      dispatch(loadUser());
  },[dispatch]);

  useEffect(()=>{
    if(error){
      toast.error(error);
      dispatch({
        type:"clearError",
      })
    }
    if(message){
      toast.success(message);
      dispatch({
        type:"clearMessage",
      })
    }
  },[dispatch,error,message]) //dispatch error message are dependency
  return <Router>
  
   <Header isAuthenticated={isAuthenticated} />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/paymentsuccess" element={<PaymentSuccess />} />
      <Route path="/about" element={<About />} />

      <Route path="/login" element={
        <ProtectedRoute isAuthenticated = { !isAuthenticated } 
         redirect="/me"
         >
         <Login/> 
         </ProtectedRoute>
      } />

      <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
      <Route path="/me" element={<Profile />} />
      <Route path="/myorders" element={<MyOrders />} />
      <Route path="/order/:id" element={<OrderDetails />} />
      <Route path="/shiping" element={<Shiping />} />
      <Route path="/confirmorder" element={<ConfirmOrder />} />
      </Route>
     
      <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} 
                                      adminRoute={true}
                                      isAdmin={user&&user.role==="admn"}
                                      redirectAdmin="/me"
      />}>

      <Route path="/admin/dashboard" element={<Dashboard />} />
      <Route path="/admin/users" element={<Users />} />
      <Route path="/admin/orders" element={<Orders />} />
      
      </Route>

      
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer/>
    <Toaster />
  </Router>
}

export default App;
