import {configureStore} from "@reduxjs/toolkit";
import {authReducer} from "../redux/reducers/userReducer"
import { cartReducer, orderReducer, ordersReducer } from "./reducers/cartReducer";
import { adminReducer } from "./reducers/adminReducer";
const store = configureStore({
    reducer:{
         auth:authReducer,
         cart:cartReducer,
         order:orderReducer,
         orders:ordersReducer,
         admin:adminReducer  
    },
})

export default store;

export const server ="https://khopadi-resto-backend.onrender.com/api/v1";