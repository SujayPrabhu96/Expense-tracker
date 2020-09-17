import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { loginRequest, loginSuccess, loginFailure } from '../actions/loginActions';
import { connect } from 'react-redux';

function LoginComponent(props) {

    const [userData, setUserData] = useState(props.user);

    return (
        <div className="container mt-5">
            <form>
                <div>
                    <h1>Login</h1>
                </div>
                <div className="form-group row">
                    <label htmlFor="email" className="col-2"><strong>Email: </strong></label>
                    <div className="col-4">
                        <input type="text" className="form-control" name="email" id="email" value={userData.email}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="password" className="col-2"><strong>Password: </strong></label>
                    <div className="col-4">
                        <input type="password" className="form-control" name="password" id="password" value={userData.password}/>
                    </div>
                </div>
                <div className="mb-3">
                    <Link to="/register">Register here</Link>
                </div>
                <button className="btn btn-primary">Login</button>
            </form>
        </div>
    );
}

const mapStateToProps = state => {
    return{
        user: state.loginReducer.user
    }
};

const mapDispatchToProps = dispatch => {
    return{
        loginRequest: (user) => dispatch(loginRequest(user)),
        loginSuccess: (user) => dispatch(loginSuccess(user)),
        loginFailure: (error) => dispatch(loginFailure(error))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);