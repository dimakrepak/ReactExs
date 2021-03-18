import React, { Component } from 'react'

export default class Age extends Component {
    render() {
        handleSubmit = (e) => {

        }
        return (
            <form onSubmit={this.handleSubmit}>
                {<label>age:</label>}
                <select >
                    <option value="young">0-15</option>
                    <option value="teen">15-20</option>
                    <option value="adult">21-50</option>
                    <option value="young">50-80</option>
                </select>
            </form>
        )
    }
}
