import { alertConstants } from '../constants/actionTypes';

export const setSuccess = message => {
    return{
        type: alertConstants.ALERT_SUCCESS,
        payload: message
    }
};

export const setError = message => {
    return{
        type: alertConstants.ALERT_ERROR,
        payload: message
    }
};