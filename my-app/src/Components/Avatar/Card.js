import React, { Component } from 'react'

export default class Card extends Component {
    render() {
        return (
            <div className="card">
                <div className="img">
                    <img src={this.props.url} alt=""></img>
                </div>
                <p>{this.props.name}</p>
            </div>
        )
    }
}
