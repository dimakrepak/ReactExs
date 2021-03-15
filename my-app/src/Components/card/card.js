
import React, { Component } from 'react'

export default class Card extends Component {
    render() {
        return (
            <div class='container'>
                <img src={this.props.img}></img>
                <h2>{this.props.title}</h2>
                <p>{this.props.des}</p>
                <div className='SE'>
                    <h3>
                        {this.props.share} {this.props.explore}
                    </h3>
                </div>
            </div>
        )
    }
}
