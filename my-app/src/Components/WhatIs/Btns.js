import React, { Component } from 'react'

export default class Btn extends Component {
    onBtnClick = (e) => {
        this.props.ShowColor(e.target.value)
    }
    render() {
        return (
            <div>
                <button className="color" onClick={this.onBtnClick}  value={this.props.color}>{this.props.color}</button>
            </div>
        )
    }
}
