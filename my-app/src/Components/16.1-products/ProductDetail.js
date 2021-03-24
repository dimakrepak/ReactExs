import React, { Component } from 'react'
import store from './store'
import { Link } from 'react-router-dom'

export default class ProductDetail extends Component {
    state = { store }
    render() {
        const index = (this.props.match.params.id) - 1

        return (
            <div className='product'>
                <h1>{this.state.store[index].title}</h1>
                <h2>Size: {this.state.store[index].size}</h2>
                <h2>Price: {this.state.store[index].price}NIS</h2>
                <img src={this.state.store[index].imageUrl} alt={this.state.store[index].title}></img>
                <Link to='/products'>
                    <button>back</button>
                </Link>
            </div >
        )
    }
}
