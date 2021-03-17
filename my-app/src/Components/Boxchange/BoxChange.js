import React, { Component } from 'react'
//hcl
export default class BoxChange extends Component {
    counter = 0
    state = {
        color: 10,
        radius: '0',

    }
    componentDidMount = () => {
        setInterval(() => {
            console.log(this.counter)
            this.counter += 1
            if (this.counter > 5) {
                this.setState({ color: (this.state.color + 50), radius:'50%' })
            }
            this.setState({ color: (this.state.color + 50), radius: this.state.radius })
        }, 1000)

    }
    componentDidUpdate = () => {


    }


    render() {
        return (
            <div className='box' style={{
                borderRadius: `${this.state.radius}`,
                backgroundColor: `hsl(${this.state.color}, 50%, 50%)`
            }}>

            </div>
        )
    }
}
