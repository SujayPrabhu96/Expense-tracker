import React from 'react';
import { connect } from 'react-redux';
import { registerSuccess, registerFailure, registerRequest, changeRegisterInput } from '../actions/registerActions';
import { setSuccess, setError } from '../actions/alertActions';
import { register } from '../helpers/Registration';
import { Link, useHistory } from 'react-router-dom';

function RegisterComponent(props) {

    let history = useHistory();
    console.log(props);
    const handleChange = (event) => {
        props.changeRegisterInput({
            ...props.user,
            [event.target.name]: event.target.value
        });
    };

    const handleClick = async (event) => {
        event.preventDefault();
        props.registerRequest(props.user);
        try {
            const response = await register(props.user);
            if (response.isSuccess) {
                props.registerSuccess(response.user);
                history.push("/login");
                props.setSuccess("Registration Successful");
            } else {
                props.registerFailure(response.message);
                props.setError(response.message);
            }
        } catch (error) {
            props.registerFailure(error);
            props.setError(error);
        }

    };

    return (
        <div className="container mt-5">
            <form>
                <div>
                    <h1>Register</h1>
                </div>
                <div className="form-group row">
                    <label htmlFor="email" className="col-4"><strong>Email: </strong></label>
                    <div className="col-4">
                        <input type="text" className="form-control" name="email" id="email" value={props.user.email} onChange={handleChange} />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="password" className="col-4"><strong>Password: </strong></label>
                    <div className="col-4">
                        <input type="text" className="form-control" name="password" id="password" value={props.user.password} onChange={handleChange} />
                    </div>
                </div>
                <div>
                    <p>Already have an account?
                        <Link to="/login">Login here</Link>
                    </p>
                </div>
                <button className="btn btn-primary" onClick={handleClick}>Register</button>
            </form>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        user: state.registerReducer.user
    }
};

const mapDispatchToProps = dispatch => {

    return {
        registerRequest,
        registerSuccess,
        registerFailure,
        changeRegisterInput,
        setSuccess,
        setError
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterComponent);