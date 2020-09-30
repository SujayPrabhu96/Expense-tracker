import { registerConstants } from '../constants/actionTypes';
import { setSuccess, setError } from './alertActions';
import { register } from '../helpers/Registration';

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

export const submitRegistration = (user) => {
    return async (dispatch) => {
        dispatch(registerRequest(user));
        try {
            const response = await register(user);
            if (response.isSuccess) {
                dispatch(registerSuccess(response.user));
                dispatch(setSuccess("Registration Successful"));
            } else {
                dispatch(registerFailure(response.message));
                dispatch(setError(response.message));
            }
            return true;
        } catch (error) {
            dispatch(registerFailure(error));
            dispatch(setError(error));
        }
    }
};