import { alertConstants } from '../constants/actionTypes';

export const success = message => {
    return{
        type: alertConstants.ALERT_SUCCESS,
        payload: message
    }
};

export const error = message => {
    return{
        type: alertConstants.ALERT_ERROR,
        payload: message
    }
};

export const clear = message => {
    return{
        type: alertConstants.ALERT_CLEAR
    }
};