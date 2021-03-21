import React, { Component } from 'react'

export default class Card extends Component {
    render() {
        return (
            <div>
                <p>Name: {this.props.name}</p>
                <p>Birthday: {this.props.birthday}</p>
                <p>Favorite meat: {this.props.favoriteMeats}</p>
                <p>Favorite fish: {this.props.favoriteFish}</p>
            </div>
        )
    }
}
