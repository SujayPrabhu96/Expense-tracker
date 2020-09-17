import { loginConstants } from '../constants/actionTypes';

export const loginRequest = user => {
    return{
        type: loginConstants.LOGIN_REQUEST,
        payload: user
    }
};

export const loginSuccess = user => {
    return{
        type: loginConstants.LOGIN_SUCCESS,
        payload: user
    }
};

export const loginFailure = error => {
    return{
        type: loginConstants.LOGIN_FAILURE,
        payload: error
    }
};