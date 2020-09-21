import React from 'react';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { changeRegisterInput, submitRegistration } from '../actions/registerActions';
import { setError } from '../actions/alertActions';

function RegisterComponent(props) {

    let history = useHistory();

    const handleChange = (event) => {
        props.changeRegisterInput(event.target.name, event.target.value);
    };

    const handleClick = async (event) => {
        event.preventDefault();
        try{
            const response = await props.submitRegistration(props.user);
            history.push("/login");
        } catch(error){
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
    return{
        user: state.registerReducer
    }
};

const mapDispatchToProps = {
    changeRegisterInput,
    submitRegistration,
    setError
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterComponent);