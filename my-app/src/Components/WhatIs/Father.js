import React, { Component } from 'react'
import Btn from './Btns'

const colors = ['blue', 'red', 'yellow'];
export default class Father extends Component {
    state = {
        currentColor: ''
    }
    ShowColorse = (value) => {
        this.setState({
            currentColor: value
        })
    }
    render() {
        return (
            <div>
                {
                    colors.map((c, index) => {
                        return <Btn color={c} key={index} ShowColor={this.ShowColorse} />
                    })
                }
                <h2>Color is {this.state.currentColor}</h2>
            </div>
        )
    }
}
