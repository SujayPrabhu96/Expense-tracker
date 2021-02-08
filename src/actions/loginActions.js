import { loginConstants } from '../constants/actionTypes';
import { setSuccess, setError } from '../actions/alertActions';
import { login } from '../helpers/Login';
import { logout } from '../helpers/Logout';

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

export const updateLoginStateRequest = () => {
    return{
        type: loginConstants.UPDATE_LOGIN_STATE_REQUEST
    }
};

export const updateLoginInitialState = user => {
    return{
        type: loginConstants.UPDATE_LOGIN_STATE_SUCCESS,
        payload: user
    }
}

export const changeLoginInput = (name, value) => {
    return{
        type: loginConstants.CHANGE_LOGIN_INPUT,
        payload: {
            name, value
        }
    }
};

export const submitLogin = user => {
    return async (dispatch) => {
        dispatch(loginRequest(user));
        try {
            const response = await login(user);
            if (response.isSuccess) {
                dispatch(loginSuccess(response.token));
                dispatch(setSuccess("Login Successful"));        
            } else {
                dispatch(loginFailure(response.message));
                dispatch(setError(response.message));
            }
            return true;
        } catch (error) {
            dispatch(loginFailure(error));
            dispatch(setError(error));
        }
    };
};

export const logoutSuccess = () => {
    return{
        type: loginConstants.LOGOUT
    }
};

export const userLogout = () => {
    return (dispatch) => {
        logout();
        dispatch(logoutSuccess());
        dispatch(setSuccess("Logout Successful"));
        return true;
    }
};