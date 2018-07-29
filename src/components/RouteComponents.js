import React, { Component } from "react";
import ProductList from "./shopping/ProductsList";
import CartItems from "./shopping/CartItems";

export class List extends Component {
    render() {
        return <div className="row">
            <div className="col-sm-7 card card-body">
                <ProductList />
            </div>
            <div className="col-sm-5 card card-body">
                <CartItems />
            </div>
        </div>
    }
}

export class NotFound extends Component {

    state = { email: "rabichhatar@gmail.com" }

    render() {
        return <div>
            <h3>404, Oooooopss!!! Not Found</h3>
            <form>
                <input id="email" name="email" type="text" onChange={this.handleOnChange} />
            </form>
        </div>
    }

    handleOnChange = (e) => {
        console.log("Handle on change >>> ", e.target.value);
    }
}