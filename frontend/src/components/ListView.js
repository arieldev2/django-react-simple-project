import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import Form from './Form';

class ListView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
        this.updateList = this.updateList.bind(this);
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/product/')
            .then(res => {
                this.setState({ products: res.data })
            })
    }

    updateList(product) {
        this.setState({
            products: [...this.state.products, product]
        })
    }

    render() {

        const listproducts = this.state.products.map((product, i) => {
            return (

                <div className="card col-md-4 mb-2" key={i} >
                    <div className="card-body">
                        <h4 className="card-title"><Link to={"/" + product.id}>{product.product}</Link></h4>
                        <p>{product.description}</p>
                    </div>

                </div>
            )
        })

        return (
            <div className="container mt-4 ">
                <Form addProduct={this.updateList} />
                <div className="row">
                    {listproducts}
                </div>
            </div>
        )
    }
}

export default ListView
