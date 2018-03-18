import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faCoffee, faSignInAlt } from '@fortawesome/fontawesome-free-solid'



class Login extends React.Component
{
    constructor() {
        super(...arguments);

        this.state = {
            showModal: false
        }
    }

    render() {

        const signIcon = (
            <FontAwesomeIcon icon={faSignInAlt} />
        );

        let that = this;

        function loginToggle() {
            let modal = document.querySelector('.modal-form');
            if (that.state.showModal === false) {
                modal.style = "display: block";
                that.state.showModal = true;
            } else {
                modal.style = "display: none";
                that.state.showModal = false;
            }

        }

        return   <ul className="nav navbar-nav navbar-center">
                <li><a className="nav-link" href="#"  onClick={() => {
                    loginToggle();
                }}>
                    <span>{signIcon}</span> Sign Up
                </a>
                </li>
            </ul>
            // <a href="#" data-toggle="modal" data-target="#login-modal" className="btn btn-warning" onClick={() => {
            //     loginToggle();
            // }}>Login</a>
            //

    }
}

export default Login;