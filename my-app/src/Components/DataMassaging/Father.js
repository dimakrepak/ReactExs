import React, { Component } from 'react'
import Card from './Card';
import users from './Data'
import Name from './Name';

export default class Father extends Component {
    state = {
        users: users,
        names: [],
        earlyBorn: [],
    }
    componentDidMount = () => {
        console.log(this.state.users);
        this.setState({
            names: this.getNames(),
            earlyBorn: this.getBorn(),
        })
    }
    getNames = () => {
        return this.state.users.map(u => u.name)
    }
    getBorn = () => {
        return this.state.users.filter(u => Number(u.birthday.split('-').slice(2)) < 1990)
    }
    render() {
        return (
            <div>
                {this.state.names.map((n, index) => {
                    return (
                        < Name
                            names={n}
                            key={index}
                        />
                    )
                })}
                {this.state.earlyBorn.map((n, index) => {
                    return (
                        <Card
                            name={n.name}
                            birthday={n.birthday}
                            favoriteMeats={n.favoriteFoods.meats.map(f => f).join(', ')}
                            favoriteFish={n.favoriteFoods.fish.map(f => f).join(', ')}
                            key={index}
                        />
                    )


                })}


            </div>
        )
    }
}
