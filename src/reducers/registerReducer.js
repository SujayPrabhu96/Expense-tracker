import { registerConstants } from '../constants/actionTypes';

const initialState = { isRegistered: false };


const registerReducer = (state = initialState, action) => {
    switch(action.type){
        case registerConstants.REGISTER_REQUEST:
            return {
                isRegistered: false
            }
        case registerConstants.REGISTER_SUCCESS:
            return{
                isRegistered: true
            }
        case registerConstants.REGISTER_FAILURE:
            return{
                isRegistered: false
            }
        default:
            return state
    }
};

export default registerReducer;