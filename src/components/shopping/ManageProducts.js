import React, { Component } from "react";
import { connect } from "react-redux";

class ManageProducts extends Component {

    render() {

        console.log("Data : ",this.props.mgProducts);
        var output = this.props.mgProducts.map((product,i)=>{
            return <tr key={i}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.description}</td>
                </tr>
        });
        return <div>
            <h3>Manage Products</h3>
            <div className="row">
                <div className="col-sm-12 card card-body">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Amount</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {output}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    }
}

function mapStateToProps(state) {
    return { mgProducts: state }
}

export default connect(mapStateToProps)(ManageProducts);