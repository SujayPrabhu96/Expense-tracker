import { alertConstants } from '../constants/actionTypes';

const initialState = {
    type: '',
    message: ''
};

const actionReducer = (state = initialState, action) => {

    switch(action.type){
        case alertConstants.ALERT_SUCCESS:
            return{
                type: 'alert-success',
                message: action.payload
            }
        case alertConstants.ALERT_ERROR:
            return{
                type: 'alert-danger',
                message: action.payload
            }
        case alertConstants.ALERT_CLEAR: 
            return initialState
        default:
            return state;
    }

};

export default actionReducer;