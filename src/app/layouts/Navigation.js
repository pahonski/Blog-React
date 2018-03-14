import React from 'react';
import NavigationList from '../components/NavigationList';
import Login from '../components/Login';


class Navigation extends React.Component
{
    render() {
        return <div className="mainMenu">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container">
                    <a className="navbar-brand" href="#">Start Bootstrap</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <NavigationList/>
                    <Login/>
                </div>
            </nav>
        </div>

    }
}

export default Navigation


//<span className="sr-only">(current)</span> for active button Bootstrap In <a>
