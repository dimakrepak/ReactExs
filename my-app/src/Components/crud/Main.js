import axios from 'axios';
import React, { Component } from 'react'
import api from './Api'
import Avatar from './Avatar';


export default class Main extends Component {
    state = {
        data: [],
        name: '',
        avatar: '',
        village: '',
        clan: '',

    }

    getData = async () => {
        const response = await axios.get(api)
        console.log(response.data);
        this.setState({
            data: response.data
        });
    }
    componentDidMount = () => {
        this.getData()
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    create = () => {
        axios.post(
            api, {
            name: this.state.name,
            avatar: this.state.avatar,
            village: this.state.village,
            clan: this.state.clan,
        }
        ).then((response) => {
            console.log(response.data);
            this.getData()
        })
        this.setState({
            name: '',
            avatar: '',
            village: '',
            clan: '',
        })
    }
    removeCard = (id) => {
        axios.delete(api + `/${id}`)
            .then(response => {
                if (response.data !== null) {
                    // alert('Card deleted')
                    // this.getData()
                    this.setState({
                        data: this.state.data.filter(card => card.id !== id)
                    })
                }
            })
    }
    confirm = (id, name, village, clan) => {
        // console.log(name);
        // console.log(id);
        // console.log(village);
        // console.log(clan);
        axios.put((api + `/${id}`), {
            name: name,
            village: village,
            clan: clan,
        })
            .then(response => {
                if (response.data !== null) this.getData()
            })
    }

    render() {
        return (
            <div>

                <label>Name:</label>
                <input
                    value={this.state.name}
                    type='text'
                    name='name'
                    onChange={this.handleChange}
                >
                </input>

                <label>Picture(url):</label>
                <input
                    value={this.state.avatar}
                    type='text'
                    name='avatar'
                    onChange={this.handleChange}
                >
                </input>

                <label>Village:</label>
                <input
                    value={this.state.village}
                    type='text'
                    name='village'
                    onChange={this.handleChange}
                >
                </input>

                <label>Clan:</label>
                <input
                    value={this.state.clan}
                    type='text'
                    name='clan'
                    onChange={this.handleChange}
                >
                </input>
                <button
                    onClick={this.create}
                >
                    Create Ninja
                </button>
                {this.state.data.map((i, index) => {
                    return (
                        <Avatar
                            img={i.avatar}
                            name={i.name}
                            village={i.village}
                            clan={i.clan}
                            key={i.id}
                            id={i.id}
                            removeCard={this.removeCard}
                            confirm={this.confirm}
                        />
                    )
                })}

            </div>
        )
    }
}
