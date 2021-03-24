import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <nav>
                <h2>DMITRI SHOP</h2>
                <ul className="nav-links">
                    <Link to='/'>
                        <li>Home</li>
                    </Link>
                    <Link to='/products'>
                        <li>Products</li>
                    </Link>
                </ul>
            </nav>
        )
    }
}
