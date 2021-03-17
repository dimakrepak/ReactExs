import React, { Component } from 'react'



export default class BoxAnim extends Component {
    state = {
        name: 'in',
    }
    componentDidMount = () => {
        setTimeout(() => {
            this.setState({ name: 'out' })
        }, 1000)
    }
    componentDidUpdate = () => {
        setTimeout(() => {
            this.setState({ name: 'in' })
        }, 3000)
    }
    render() {
        return (
            <div>
                <div style={{ width: this.props.width, width: this.props.height }} className={this.state.name}></div>

            </div>
        )
    }
}
