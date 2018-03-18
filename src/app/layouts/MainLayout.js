import React from 'react';
import Navigation from '../components/Navigation';
import LoginForm from '../components/LoginForm';

export default class MainLayout extends React.Component
{
    constructor() {
        super(...arguments);

        this.brand = 'React Blog';
    }


    render() {
        return(
            <div>
                <Navigation/>
                <LoginForm/>
                {this.props.children}
            </div>
        );
    }
}