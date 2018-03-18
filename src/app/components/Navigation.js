import React from 'react';
import NavigationList from './NavigationList';
import Login from './Login';
import { Link } from 'react-router';


class Navigation extends React.Component

{

    constructor() {
        super(...arguments)

        this.brand = 'React Blog'
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link to="/" className="navbar-brand">
                            {this.brand}
                        </Link>
                    </div>

                        <NavigationList/>
                        <Login/>


                </div>
            </nav>
        );
    }
}

export default Navigation


//<span className="sr-only">(current)</span> for active button Bootstrap In <a>
