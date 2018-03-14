import React from 'react';

class Login extends React.Component


{
    constructor() {
        super(...arguments);

        this.state = {
            showModal: false
        }
    }

    render() {
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

        return <div className="justify-content-between">
            <a href="#" data-toggle="modal" data-target="#login-modal" className="btn btn-warning" onClick={() => {
                loginToggle();
            }}>Login</a>
            </div>

    }
}

export default Login;