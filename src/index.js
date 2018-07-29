import React from "react";
import ReactDOM from "react-dom";
import ShoppingApp from "./components/App";
import { BrowserRouter } from "react-router-dom";
import { createStore, combineReducers } from "../node_modules/redux";
import { Provider } from "react-redux";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

let productData = [
    { "id": 1, "name": "Barvia", "price": 65000, "description": "Sony TV" },
    { "id": 2, "name": "Gaxaly S", "price": 14000, "description": "Samsung Mobile" },
    { "id": 3, "name": "IPhone 8", "price": 62000, "description": "Apple IPhone" },
    { "id": 4, "name": "Mac Book", "price": 147000, "description": "Apple Mac Book" },
    { "id": 5, "name": "Nokia 6", "price": 25000, "description": "Nokia Mobile" }
]

let cartData = [];

let productReducer = (state = productData, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            console.log("Prouct reducer ADD_TO_CART");
            state = state.filter((product) => product.id != action.payload.id)
            return state;
        case "REMOVE_FROM_CART":
            console.log("Prouct reducer REMOVE_FROM_CART");
            return [...state, action.payload]
        case "ADD_PRODUCT":
            console.log("Prouct reducer ADD_PRODUCT");
            return [...state, action.payload]
        case "DELETE_PRODUCT":
            console.log("Prouct reducer DELETE_PRODUCT");
            let idx = state.findIndex((e) => e.id == action.payload);
            return [...state.slice(0,idx), ...state.slice(idx+1)];
        case "UPDATE_PRODUCT":
            console.log("Prouct reducer UPDATE_PRODUCT");
            let pid = state.findIndex((e) => e.id == action.payload.id);
            return [...state.slice(0,pid), action.payload, ...state.slice(pid+1)];
        case "GET_PRODUCTS":
            console.log("Prouct reducer GET_PRODUCTS");
            return action.payload;
        default:
            return state;
    }
}

let cartReducer = (state = cartData, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            console.log("Cart Reducer ADD_TO_CART");
            state = [...state, action.payload]
            return state;
        case "REMOVE_FROM_CART":
            console.log("Cart reducer REMOVE_FROM_CART");
            state = state.filter((item) => item.id != action.payload.id)
            return state;
        default:
            return state;

    }
}

let appStore = createStore(combineReducers({ productReducer, cartReducer }));

ReactDOM.render(
    <Provider store={appStore}>
        <BrowserRouter basename="/myshop/">
            <ShoppingApp />
        </BrowserRouter>
    </Provider>
    , document.getElementById("root"));