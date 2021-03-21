import axios from 'axios'
import React, { Component } from 'react'
import Card from './Card'

export default class Father extends Component {
    state = {
        avatar: [],
        inputValue: ''
    }
    componentDidMount = async () => {
        const response = await axios.get('https://randomuser.me/api/?results=20')
        const users = response.data.results.map(u => {
            return ({
                name: (`${u.name.first} ${u.name.last}`),
                image: u.picture.large,
            })
        })
        this.setState({
            avatar: users
        })
    }
    handleChange = (e) => {
        this.setState({
            inputValue: e.target.value
        })
        this.findUser()

    }
    findUser = () => {
        return this.state.avatar.filter(a => a.name.toLowerCase().includes(this.state.inputValue))
    }
    render() {
        return (
            < div className='centr' >
                {/* {console.log(this.findUser())} */}
                <div>
                    <input
                        onChange={this.handleChange}
                        type='text'
                        value={this.state.inputValue}
                    >

                    </input>
                </div>
                <div className='flexin'>
                    {this.findUser().map((a, index) => {
                        return (
                            <Card
                                name={a.name}
                                url={a.image}
                                key={index}
                            />
                        )

                    })}
                </div>
            </div >
        )
    }
}
