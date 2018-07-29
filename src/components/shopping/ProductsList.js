import React, { Component } from "react";
import { connect } from "react-redux";

class Class extends Component {

    render() {
        console.log("Data : ", this.props.products);

        var output = this.props.products.map((product, i) => {
            return <div className="card" key={i}>
                <div className="card-header bg-warning">
                    <b>{product.name}</b>
                </div>
                <div className="card-body">
                    Price : {product.price}
                    <br />
                    Description : {product.description}
                </div>
                <div className="card-footer">
                    <button className="btn btn-primary" onClick={() => this.props.addToCart(product)}>Add To Cart</button>
                </div>
            </div>
        });

        return <div>
            <h4>List of Products</h4>
            <div className="card-columns">
                {output}
            </div>
        </div>
    }
}

function mapStateToProps(state) {
    return { products: state.productReducer }
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: (selectedProductData) => {
            let item = {
                id: selectedProductData.id,
                name: selectedProductData.name,
                price: selectedProductData.price,
                qty: 1
            }
            dispatch({ type: "ADD_TO_CART", payload: item });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);