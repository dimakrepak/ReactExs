import React, { Component } from 'react'

export default class Autocopy extends Component {

    textRef = React.createRef()

    handleClick = () => {
        const e = this.textRef.current
        e.select()
        document.execCommand("copy")

    }

    render() {
        return (
            <div>
                <textarea ref={this.textRef}></textarea>
                <button onClick={this.handleClick}>copy</button>
            </div>
        )
    }
}
