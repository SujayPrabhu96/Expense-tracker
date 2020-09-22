import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { loginRequest, loginSuccess, loginFailure } from '../actions/loginActions';
import { success, error } from '../actions/alertActions';
import { login } from '../helpers/Login';
import { connect } from 'react-redux';

function LoginComponent(props) {

    let history = useHistory();
    const [userData, setUserData] = useState(props.user || { email: '', password: '' });

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
    };

    const handleClick = async (event) => {
        event.preventDefault();
        props.loginRequest(userData);
        try {
            const response = await login(userData);
            if (response.isSuccess) {
                props.loginSuccess(response.token);
                history.push("/home");
                props.success("Login Successful");        
            } else {
                props.loginFailure(response.message);
                props.error(response.message);
            }
        } catch (error) {
            props.loginFailure(error);
            props.error(error);
        }
    };

    return (
        <div className="container mt-5">
            <form>
                <div>
                    <h1>Login</h1>
                </div>
                <div className="form-group row">
                    <label htmlFor="email" className="col-2"><strong>Email: </strong></label>
                    <div className="col-4">
                        <input type="text" className="form-control" name="email" id="email" value={userData.email} onChange={handleChange} />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="password" className="col-2"><strong>Password: </strong></label>
                    <div className="col-4">
                        <input type="password" className="form-control" name="password" id="password" value={userData.password} onChange={handleChange} />
                    </div>
                </div>
                <div className="mb-3">
                    <Link to="/register">Register here</Link>
                </div>
                <button className="btn btn-primary" onClick={handleClick}>Login</button>
            </form>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        user: state.loginReducer
    }
};

const mapDispatchToProps = dispatch => {
    return {
        loginRequest: (user) => dispatch(loginRequest(user)),
        loginSuccess: (user) => dispatch(loginSuccess(user)),
        loginFailure: (error) => dispatch(loginFailure(error)),
        success: (message) => dispatch(success(message)),
        error: (message) => dispatch(error(message))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);