import React, { useState } from 'react';
import { connect } from 'react-redux';
import { registerSuccess, registerFailure, registerRequest } from '../actions/registerActions';
import { register } from '../helpers/Registration';

function RegisterComponent(props){
    
    const [userData, setUserData] = useState(props.user);

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value 
        });
    };

    const handleClick = async (event) => {
        event.preventDefault();
        props.registerRequest(userData);
        const response = await register(userData);
        if(response.isSuccess){
            props.registerSuccess(response.user);
        } else {
            props.registerFailure(response.message);
        }
    };
         
    return(
        <div className="container mt-5">
            <form>
                <div>
                    <h1>Register</h1>
                </div>
                <div className="form-group row">
                    <label htmlFor="email" className="col-4"><strong>Email: </strong></label>
                    <div className="col-4">
                        <input  type="text" className="form-control" name="email" id="email" value={userData.email} onChange={handleChange}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="password" className="col-4"><strong>Password: </strong></label>
                    <div className="col-4">
                        <input  type="text" className="form-control" name="password" id="password" value={userData.password} onChange={handleChange} />
                    </div>
                </div>
                <button className="btn btn-primary" onClick={handleClick}>Submit</button>
            </form>
        </div>
    );
}

const mapStateToProps = state => {
    return{
        user: state.registerReducer.user
    }
};

const mapDispatchToProps = dispatch => {

    return{
        registerRequest: (user) => dispatch(registerRequest(user)),
        registerSuccess: (user) => dispatch(registerSuccess(user)),
        registerFailure: (error) => dispatch(registerFailure(error))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterComponent);