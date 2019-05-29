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
        this.onSubmit = this.onSubmit.bind(this);
    }



    onSubmit = (e) => {
        e.preventDefault();
        const { product, description } = this.state;
        const post = { product, description };

        axios.post('http://127.0.0.1:8000/api/product/', post)
            .then(res => console.log(res.data))

        this.setState({
            product: "",
            description: ""

        });
        this.props.addProduct(this.state);



    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    render() {

        const { product, description } = this.state;

        return (
            <div>
                <form onSubmit={this.onSubmit} className="mb-3" encType="multipart/form-data">
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
                    <button className="btn  btn-primary btn-block" type="submit">Add</button>

                </form>

            </div>
        )
    }
}

export default Form
