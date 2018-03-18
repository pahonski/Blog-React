import React from 'react';
import UsersList from '../components/UsersList';

export default class Users extends React.Component
{
    render() {
        return <div className="container">
            <div className="main-content">
                Список пользователей
                <UsersList/>
            </div>

        </div>


    }
}