import React from "react";
import ReactDOM from "react-dom";
import ShoppingApp from "./components/App";
import { BrowserRouter } from "react-router-dom";
import { createStore } from "../node_modules/redux";
import { Provider } from "react-redux";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

let productData = [
    { "id": 1, "name": "Barvia", "price": 65000, "description": "Sony TV" },
    { "id": 2, "name": "Gaxaly S", "price": 14000, "description": "Samsung Mobile" },
    { "id": 3, "name": "IPhone 8", "price": 62000, "description": "Apple IPhone" },
    { "id": 4, "name": "Mac Book", "price": 147000, "description": "Apple Mac Book" },
    { "id": 5, "name": "Nokia 6", "price": 25000, "description": "Nokia Mobile" }
]

let productReducer = (state = productData, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            console.log("Prouct reducer ADD_TO_CART");
            return state;
        default:
            return state;
    }
}

let appStore = createStore(productReducer);

ReactDOM.render(
    <Provider store={appStore}>
        <BrowserRouter>
            <ShoppingApp />
        </BrowserRouter>
    </Provider>
, document.getElementById("root"));