import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { changeLoginInput, submitLogin } from '../actions/loginActions';
import { setError } from '../actions/alertActions';
import { connect } from 'react-redux';

function LoginComponent(props) {
    
    let history = useHistory();

    const handleChange = (event) => {
        props.changeLoginInput(event.target.name, event.target.value);
    };

    const handleClick = async (event) => {
        event.preventDefault();
        try{
            const response = await props.submitLogin(props.user);
            history.push("/");
        } catch(error){
            props.setError(error);
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
                        <input type="text" className="form-control" name="email" id="email" value={props.user.email} onChange={handleChange} />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="password" className="col-2"><strong>Password: </strong></label>
                    <div className="col-4">
                        <input type="password" className="form-control" name="password" id="password" value={props.user.password} onChange={handleChange} />
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
    return{
        user: state.loginReducer
    }
};

const mapDispatchToProps = {
    changeLoginInput,
    submitLogin,
    setError
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);