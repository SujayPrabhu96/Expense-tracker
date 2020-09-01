import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE } from '../constants/actionTypes';

export const registerRequest = user => {
    return{
        type: REGISTER_REQUEST,
        payload: user
    }
};

export const registerSuccess = user => {
    return{
        type: REGISTER_SUCCESS,
        payload: user
    }
};

export const registerFailure = error => {
    return{
        type: REGISTER_FAILURE,
        payload: error
    }
};