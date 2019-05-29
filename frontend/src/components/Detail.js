import React, { Component } from 'react'
import axios from 'axios';
import FormUpdate from './FormUpdate';


class Detail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            product: {}
        }

    }



    componentDidMount() {
        const productID = this.props.match.params.productID;
        axios.get(`http://127.0.0.1:8000/api/product/${productID}`)
            .then(res => {
                this.setState({
                    product: res.data
                });

            })

    }


    handleDelete = (event) => {
        const productID = this.props.match.params.productID;
        axios.delete(`http://127.0.0.1:8000/api/product/${productID}/`)

        this.props.history.push('/');
        window.location.reload();


    }


    render() {
        return (
            <div className="container mt-4">
                <h4>{this.state.product.product}</h4>

                <p>{this.state.product.description}</p>
                <FormUpdate productID={this.props.match.params.productID} />

                <form onSubmit={this.handleDelete}>
                    <button type="submit" className="btn btn-danger">Delete</button>
                </form>


            </div>

        )
    }
}

export default Detail
