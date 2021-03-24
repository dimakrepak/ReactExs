import React, { Component } from 'react'
import store from './store'
import { Link } from 'react-router-dom'

export default class Products extends Component {

    state = { store }

    render() {

        return (
            <div className='products'>
                {console.log(this.state.store)}
                {this.state.store.map(i => {
                    return (
                        <h1 key={i.id}
                        >
                            <Link to={`/products/${i.id}`}>{i.title}</Link>
                        </h1>

                    )
                })}
                <Link to='/'>
                    <button>back</button>
                </Link>
            </div>
        )
    }
}
