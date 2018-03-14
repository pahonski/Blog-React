import React from 'react';

class LoginForm extends React.Component
{
    render(){

        let formVisibility = {
            display: "none"
        };

        return <div className="modal-form" style={formVisibility}>
            <form>
                <header>Login</header>
                <label>Username <span>*</span></label>
                <input/>
                <div className="help">At least 6 character</div>
                <label>Password <span>*</span></label>
                <input/>
                <div className="help">Use upper and lowercase lettes as well</div>
                <button>Login</button>
            </form>
        </div>



    }
}

export default LoginForm;


{/*<div className="modal fade" id="login-modal" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style={divStyle}>*/}
    {/*<div className="modal-dialog">*/}
        {/*<div className="loginmodal-container">*/}
            {/*<h1>Login to Your Account</h1><br/>*/}
            {/*<form>*/}
                {/*<input type="text" name="user" placeholder="Username"/>*/}
                {/*<input type="password" name="pass" placeholder="Password"/>*/}
                {/*<input type="submit" name="login" className="login loginmodal-submit" value="Login"/>*/}
            {/*</form>*/}

            {/*<div className="login-help">*/}
                {/*<a href="#">Register</a> - <a href="#">Forgot Password</a>*/}
            {/*</div>*/}
        {/*</div>*/}
    {/*</div>*/}
{/*</div>*/}