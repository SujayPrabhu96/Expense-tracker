import { apis } from '../apis/endPoints';
import axios from '../apis/axios';

export const login = async({ email, password }) => {
    const response = await axios.post(apis.userLogin, { email, password });
    localStorage.setItem('user', JSON.stringify(response.data));
    return response.data;
}

export const checkIfUserLoggedIn = () => {
    if(!localStorage.getItem('user')){
        return false;
    }
    return true;
}

export const getLoginInitialState = () => {
    return JSON.parse(localStorage.getItem('user'));
}