import React, { Component } from 'react'
import axios from 'axios';

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            product: "",
            description: ""
        }
        this.onChange = this.onChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleFormSubmit = (event, productID) => {
        event.preventDefault();
        const product = event.target.elements.product.value;
        const description = event.target.elements.description.value;
        const post = { product, description };

        axios.put(`http://127.0.0.1:8000/api/product/${productID}/`, post)
            .then(res => console.log(res.data))

        this.setState({
            product: "",
            description: ""
        });


        window.location.reload();

    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    render() {

        const { product, description } = this.state;

        return (
            <div>
                <form onSubmit={(event) => this.handleFormSubmit(
                    event,
                    this.props.productID)}
                    className="mb-3" encType="multipart/form-data">
                    <div className="form-group">
                        <label>Product</label>
                        <input className="form-control" type="text" name="product" value={product}
                            onChange={this.onChange} />
                    </div>

                    <div className="form-group">
                        <label>Description</label>
                        <input className="form-control" type="text" name="description" value={description}
                            onChange={this.onChange} />
                    </div>
                    <button className="btn  btn-primary btn-block" type="submit">Update</button>

                </form>

            </div>
        )
    }
}

export default Form
