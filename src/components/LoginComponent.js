import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { changeLoginInput, submitLogin } from '../actions/loginActions';
import { setError } from '../actions/alertActions';
import { useSelector, useDispatch } from 'react-redux';

function LoginComponent(props) {
    
    let history = useHistory();
    const user = useSelector(state => state.loginReducer);
    const dispatch = useDispatch();

    const handleChange = (event) => {
        dispatch(changeLoginInput(event.target.name, event.target.value));
    };

    const handleClick = async (event) => {
        event.preventDefault();
        try{
            const response = await dispatch(submitLogin(user));
            history.push("/");
        } catch(error){
            dispatch(setError(error));
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
                        <input type="text" className="form-control" name="email" id="email" value={user.email || ''} onChange={handleChange} />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="password" className="col-2"><strong>Password: </strong></label>
                    <div className="col-4">
                        <input type="password" className="form-control" name="password" id="password" value={user.password || ''} onChange={handleChange} />
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

export default LoginComponent;