import React, { Component } from 'react'


export default class LifeCycle extends Component {

    state = { favoriteColor: 'yellow' }
    id = React.createRef()

    componentDidMount = () => {
        setTimeout(() => {
            this.setState({ favoriteColor: 'blue' })
        }, 1000)
    }
    componentDidUpdate = () => {
        this.id.current.innerHTML = 'hello'
    }
    render() {
        return (
            <div>
                <h1>My favorite color is {this.state.favoriteColor}</h1>
                <h2 ref={this.id}></h2>
            </div>
        )
    }
}
