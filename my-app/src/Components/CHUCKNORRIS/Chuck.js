import React, { Component } from 'react'
import axios from 'axios';

export default class Chuck extends Component {
    state = {
        joke: '',
        categories: [],
    }
    getCategory = async () => {
        const response = await axios.get('https://api.chucknorris.io/jokes/categories')
        this.setState({ categories: response.data })
    }
    getCategoryJoke = async (e) => {
        const response = await axios.get(`https://api.chucknorris.io/jokes/random?category=${e.target.value}`)
        this.setState({ joke: response.data.value })
        
    }
    render() {
        return (
            <div>
                <button
                    onClick={this.getCategory}
                >
                    Categories
                </button>
                {this.state.categories.map((c, index) => {
                    return (
                        <button onClick={this.getCategoryJoke} key={index} value={c}>{c}</button>
                    )
                })}
                <p>{this.state.joke}</p>
            </div>
        )
    }
}
