import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import Products from './Products'
import Header from './Header'
import Homepage from './Homepage'
import ProductDetail from './ProductDetail';

export default class Main extends Component {
    render() {
        return (
            <div className='main'>
                <BrowserRouter>
                    <div>
                        <Header />
                        <Route path="/" exact component={Homepage} />
                        <Route path="/products" exact component={Products} />
                        <Route path="/products/:id" exact component={ProductDetail} />
                        {/* <Route /> */}
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}
