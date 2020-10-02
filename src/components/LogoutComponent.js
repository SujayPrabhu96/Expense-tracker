import React from 'react';
import { useHistory } from 'react-router-dom';
import { userLogout } from '../actions/loginActions';

function LogoutComponent(){

    let history = useHistory();
    userLogout();
    history.push("/login");
    return null;
}

export default LogoutComponent;