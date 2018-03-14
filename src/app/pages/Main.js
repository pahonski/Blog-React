import React from 'react';
import Navigation from '../layouts/Navigation';
import MainContent from "../layouts/MainContent";
import LoginForm from '../components/LoginForm';

class Main extends React.Component
{
    render() {
        return <div className="container">
            <Navigation/>
            <MainContent/>
            <LoginForm/>
        </div>


    }
}

export default Main;