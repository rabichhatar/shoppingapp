import React, { Component } from "react";

class CartItems extends Component {

    render() {
        return <div>
            <h4>Cart Items</h4>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
                <tfoot>
                    <tr>
                        <th colSpan="3">Total Amount</th>
                        <th></th>
                    </tr>
                </tfoot>
            </table>
        </div>
    }
}

export default CartItems;