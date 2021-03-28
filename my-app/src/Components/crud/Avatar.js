import React, { Component } from 'react'

export default class Avatar extends Component {

    state = {
        edit: false,
        name: '',
        village: '',
        clan: '',
    }
    removeCard = () => {
        this.props.removeCard(this.props.id)
    }
    handleEdit = () => {
        this.setState({ edit: !this.state.edit })
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        
    }
    handleConfirm = () => {
        this.handleEdit();
        this.props.confirm(this.props.id, this.state.name, this.state.village, this.state.clan)
    }
    render() {
        return (
            <div className='avatar'>
                {this.state.edit ?
                    <div>
                        <div className='profile'>
                            <img src={this.props.img} alt={this.props.name}></img>
                        </div>
                        <h2 className='name'>Name:<input value={this.state.name} name='name' type='text' onChange={this.handleChange}></input> </h2>
                        <p>Village:<input value={this.state.village} name='village' type='text' onChange={this.handleChange}></input> </p>
                        <p>Clan:<input value={this.state.clan} name='clan' type='text' onChange={this.handleChange}></input> </p>
                        <button onClick={this.handleConfirm}>confirm</button>
                    </div>
                    :
                    <div>
                        <div className='profile'>
                            <img src={this.props.img} alt={this.props.name}></img>
                        </div>
                        <h2 className='name'>Name: {this.props.name}</h2>
                        <p>Village: {this.props.village}</p>
                        <p>Clan: {this.props.clan}</p>
                        <button onClick={this.handleEdit}>edit</button>
                    </div>

                }
                <button onClick={this.removeCard}>delete</button>
            </div >
        )
    }
}
