
import React, { Component } from 'react'

export default class Increment extends Component {
    constructor(props) {
        super(props);
        this.state = { c: 1 }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(e) {
        this.setState({ counter: this.state.c++ })
    }
    render() {
        return (
            <div clas="btn">
                <button onClick={this.handleClick}>
                    increment
                </button>
                <label>{this.state.counter || 0}</label>
            </div>
        )
    }
}

