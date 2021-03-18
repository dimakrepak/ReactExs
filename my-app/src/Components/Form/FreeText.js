import React, { Component } from 'react'

export default class FreeText extends Component {
    render() {
        handleSubmit = (e) => {

        }
        return (
            <form onSubmit={this.handleSubmit}>
                <textarea className='text' >

                </textarea>
            </form>
        )
    }
}
