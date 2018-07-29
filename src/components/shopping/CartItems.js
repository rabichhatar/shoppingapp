import React, { Component } from "react";
import { connect } from "react-redux";

class CartItems extends Component {


    render() {
        return <div>
            <h4>Cart Items <span className="badge badge-primary">{this.props.cartItems.length}</span></h4>
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
                    {this.getCartItems()}
                </tbody>
                <tfoot>
                    <tr>
                        <th colSpan="3">Total Amount</th>
                        <th>{this.totalAmount()}</th>
                    </tr>
                </tfoot>
            </table>
        </div>
    }

    totalAmount = () => {
        let total = 0;
        for (let item of this.props.cartItems) {
            total += item.price * item.qty;
        }
        return total;
    }

    getCartItems() {
        if (this.props.cartItems.length == 0) {
            return <tr><td colSpan="4">No Data Found</td></tr>;
        }
        else {
            return this.props.cartItems.map((item, i) => {
                return <tr key={i}>
                    <td><button className="btn btn-sm btn-danger"
                        onClick={() => this.props.removeFromCart(item)}>X</button> {item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.qty}</td>
                    <td>{item.price * item.qty}</td>
                </tr>;
            });
        }
    }
}

function mapStateToProps(state) {
    return { cartItems: state.cartReducer };
}

function matchDispatchToProps(dispatch) {
    return {
        removeFromCart: (item) => {
            dispatch({ type: "REMOVE_FROM_CART", payload: item })
        }
    }
}

export default connect(mapStateToProps, matchDispatchToProps)(CartItems);