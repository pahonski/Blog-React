import React from 'react';
import axios from 'axios';
import User from './User';

export default class UsersList extends React.Component
{
    constructor() {
        super(...arguments);

        this.state = {
            users: []
        };

        axios
            .get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {

            let { data } = response;

                this.setState(
                    {users: data}
                );

            })
            .catch((reject) => {
                console.log('Что-то пошло не так', reject);
            });



    }

    render() {
        if(!this.state.users.length) {return null;}


        let users = this.state.users.map((users, index) => {
            return <User key={index} {...users}/>
        });

        console.log('users', users);

        return <div>{users}</div>
    }
}



