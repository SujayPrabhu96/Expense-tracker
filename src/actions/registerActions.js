import { registerConstants } from '../constants/actionTypes';

export const registerRequest = user => {
    return{
        type: registerConstants.REGISTER_REQUEST,
        payload: user
    }
};

export const registerSuccess = user => {
    return{
        type: registerConstants.REGISTER_SUCCESS,
        payload: user
    }
};

export const registerFailure = error => {
    return{
        type: registerConstants.REGISTER_FAILURE,
        payload: error
    }
};

export const changeRegisterInput = (name, value) => {
    return{
        type: registerConstants.CHANGE_REGISTER_INPUT,
        payload: {
            name, value
        }
    }
};