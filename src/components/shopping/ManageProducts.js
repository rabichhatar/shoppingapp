import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

class ManageProducts extends Component {

    constructor() {
        super();
        console.log("constructor....");
        this.apiUrl = "http://localhost:4000/wsproducts";
    }

    componentWillMount() {
        console.log("componentWillMount....", this.props.mgProducts);
    }

    render() {
        console.log("render....");
        console.log("Data : ", this.props.mgProducts);

        return <div>
            <h3>Manage Products</h3>
            <div className="row">
                <div className="col-sm-12 card card-body">
                    <form>
                        <input type="text" ref="pid" placeholder="Product Id" readOnly/>
                        <input type="text" ref="pname" placeholder="Product Name" />
                        <input type="text" ref="price" placeholder="Product Price" />
                        <input type="text" ref="desc" placeholder="Description" />
                        <button type="button" className="btn btn-primary"
                            onClick={this.handleAdd}>Add</button>
                        <button type="button" className="btn btn-warning"
                            onClick={this.handleUpdate}>Update</button>
                    </form>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Amount</th>
                                <th>Description</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.getProducts()}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    }

    componentDidMount() {
        console.log("componentDidMount....");
        document.querySelector("h3").style.color = "red";

        axios.get(this.apiUrl).then((resp)=>{
            console.log("Success : ",resp.data);
            this.props.loadProducts(resp.data);
        },(err) => {
            console.log("Error : ", err);
        })
    }

    componentWillUnmount() {
        console.log("componentWillUnmount....");
    }

    getProducts() {
        return this.props.mgProducts.map((product, i) => {
            return <tr key={i}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.description}</td>
                <td>
                    <button type="button" className="btn btn-danger"
                        onClick={() => this.handleDelete(product.id)}>Delete</button>
                    <button type="button" className="btn btn-success"
                        onClick={() => this.handleEdit(product)}>Edit</button>
                </td>
            </tr>
        });
    }

    handleAdd = () => {
        // console.log("Add Product", this.refs.pname.value);
        let newProduct = {
            //id: this.refs.pid.value,
            name: this.refs.pname.value,
            price: this.refs.price.value,
            description: this.refs.desc.value,
        }
        // this.props.addProduct(newProduct);
        axios.post(this.apiUrl, newProduct).then(
            (resp) => {
                console.log("Success : ", resp.data);
                this.props.addProduct(resp.data);
            },
            (err) => {
                console.log("Error : ", err);
            }
        )
    }

    handleDelete(productId) {
        console.log("Delete Product Id", productId);
        // this.props.deleteProduct(productId);
        axios.delete(this.apiUrl+"/"+productId).then(
            (resp) => {
                console.log("Success : ", resp);
                this.props.deleteProduct(productId);
            },
            (err) => {
                console.log("Error : ", err);
            }
        )
    }

    handleEdit = (product) => {
        this.refs.pid.value = product.id;
        this.refs.pname.value = product.name;
        this.refs.price.value = product.price;
        this.refs.desc.value = product.description;
    }

    handleUpdate = () => {
        let modifiedProduct = {
            /*id: this.refs.pid.value,*/
            name: this.refs.pname.value,
            price: this.refs.price.value,
            description: this.refs.desc.value,
        }
        // this.props.updateProduct(modifiedProduct);
        axios.put(this.apiUrl+"/"+this.refs.pid.value, modifiedProduct).then(
            (resp) => {
                console.log("Success : ", resp.data);
                this.props.updateProduct(resp.data);
            },
            (err) => {
                console.log("Error : ", err);
            }
        )
        this.resetForm();
    }

    resetForm = () => {
        this.refs.pid.value = "";
        this.refs.pname.value = "";
        this.refs.price.value = "";
        this.refs.desc.value = "";
    }
}

function mapStateToProps(state) {
    return { mgProducts: state.productReducer }
}

function mapDispatchToProps(dispatch) {
    return {
        addProduct: (newProduct) => {
            dispatch({ type: "ADD_PRODUCT", payload: newProduct })
        },
        deleteProduct: (productId) => {
            dispatch({ type: "DELETE_PRODUCT", payload: productId })
        },
        updateProduct: (modifiedProduct) => {
            dispatch({ type: "UPDATE_PRODUCT", payload: modifiedProduct })
        },
        loadProducts: (productsList)=>{
            dispatch({ type: "GET_PRODUCTS", payload: productsList })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageProducts);