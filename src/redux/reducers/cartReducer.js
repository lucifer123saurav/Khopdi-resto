import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    cartItems:localStorage.getItem("cartItems")?
    JSON.parse(localStorage.getItem("cartItems")):
    {
        cheeseBurger:{
            quantity:0,
            price:500
        },
        specialPizza:{
            quantity:0,
            price:2200
        },
        regularBurger:{
            quantity:0,
            price:200
        },
        regularPizza:{
            quantity:0,
            price:1000
        }
    },
    subTotal:localStorage.getItem("cartPrices")? JSON.parse(localStorage.getItem("cartPrices")).subTotal:0,
    tax:localStorage.getItem("cartPrices")? JSON.parse(localStorage.getItem("cartPrices")).tax:0,
    shippingCharges:localStorage.getItem("cartPrices")? JSON.parse(localStorage.getItem("cartPrices")).shippingCharges:0,
    total:localStorage.getItem("cartPrices")? JSON.parse(localStorage.getItem("cartPrices")).total:0,
    shippingInfo:localStorage.getItem("shipingInfo")? JSON.parse(localStorage.getItem("shipingInfo")):{},
}

export const cartReducer = createReducer(initialState, {

    cheeseBurgerIncrement: (state) => {
        state.cartItems.cheeseBurger.quantity += 1;
    },
    regularBurgerIncrement: (state) => {
        state.cartItems.regularBurger.quantity += 1;
    },
    specialPizzaIncrement: (state) => {
        state.cartItems.specialPizza.quantity += 1;
    },
    regularPizzaIncrement: (state) => {
        state.cartItems.regularPizza.quantity += 1;
    },
    cheeseBurgerDecrement: (state) => {
        state.cartItems.cheeseBurger.quantity -= 1;
    },
    regularBurgerDecrement: (state) => {
        state.cartItems.regularBurger.quantity -= 1;
    },
    specialPizzaDecrement: (state) => {
        state.cartItems.specialPizza.quantity -= 1;
    },
    regularPizzaDecrement: (state) => {
        state.cartItems.regularPizza.quantity -= 1;
    },

    calculatePrice:(state) => {
        state.subTotal = state.cartItems.regularBurger.price*state.cartItems.regularBurger.quantity
                        +state.cartItems.cheeseBurger.price*state.cartItems.cheeseBurger.quantity
                        +state.cartItems.specialPizza.price*state.cartItems.specialPizza.quantity
                        +state.cartItems.regularPizza.price*state.cartItems.regularPizza.quantity;
                               
        state.tax = state.subTotal*0.18;
        state.shippingCharges = state.subTotal > 1000 ? 0 : 100;
        state.total = state.subTotal + state.tax + state.shippingCharges;
    },

    emptyState:(state) => {
        state.cartItems = {
            cheeseBurger:{
                quantity:0,
                price:500
            },
            regularBurger:{
                quantity:0,
                price:200
            },
            specialPizza:{
                quantity:0,
                price:2200
            },
            regularPizza:{
                quantity:0,
                price:1000
            },
        };
        state.subTotal=0;
        state.shippingCharges=0;
        state.tax=0;
        state.total=0;
    },
    addShipingInfo: (state,action) => {
            state.shippingInfo = {
            hNo:action.payload.hNo,
            city:action.payload.city,
            country:action.payload.country,
            state:action.payload.state,
            pincd:action.payload.pinCode,
            phoneNo:action.payload.phoneNo
        }
    }

});

export const orderReducer = createReducer({},{
    createOrderRequest :(state) => {
        state.loading = true;

    },
    createOrderSuccess :(state,action) => {
        state.loading = false;
        state.message = action.payload;
    },
    createOrderFail :(state,action) => {
        state.loading = false;
        state.error = action.payload;
    },

    paymentVerificationRequest :(state) => {
        state.loading = true;

    },
    paymentVerificationSuccess :(state,action) => {
        state.loading = false;
        state.message = action.payload;
    },
    paymentVerificationFail :(state,action) => {
        state.loading = false;
        state.error = action.payload;
    },

    clearMessage : (state) => {
        state.message = null;
    },
    clearError: (state) => {
        state.error = null;
    }

})
export const ordersReducer = createReducer({orders:[]},{
    getMyOrdersRequest :(state) => {
        state.loading = true;

    },
    getMyOrdersSuccess :(state,action) => {
        state.loading = false;
        state.orders = action.payload;
    },
    getMyOrdersFail :(state,action) => {
        state.loading = false;
        state.error = action.payload;
    },

  getOrderDetailsRequest :(state) => {
        state.loading = true;

    },
    getOrderDetailsSuccess :(state,action) => {
        state.loading = false;
        state.order = action.payload;
    },
    getOrderDetailsFail :(state,action) => {
        state.loading = false;
        state.error = action.payload;
    },

    clearMessage : (state) => {
        state.message = null;
    },
    clearError: (state) => {
        state.error = null;
    }

})