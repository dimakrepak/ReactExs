import React, { Component } from 'react'

export default class Focus extends Component {
    inputRef = React.createRef()
    componentDidMount = () => {
        this.inputRef.current.focus()
    }

    render() {
        return (
            <div>
                <input ref={this.inputRef} type='text'>

                </input>
            </div>
        )
    }
}
