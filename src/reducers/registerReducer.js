import { registerConstants } from '../constants/actionTypes';

const initialState = {
    email: '',
    password: '',
    isRegistered: false
};

const registerReducer = (state = initialState, action) => {
    switch (action.type) {
        case registerConstants.REGISTER_REQUEST:
            return {
                ...state,
                email: action.payload.email,
                password: action.payload.password
            }
        case registerConstants.REGISTER_SUCCESS:
            return {
                ...state,
                isRegistered: true,
                email: action.payload.email,
                password: action.payload.password
            }
        case registerConstants.REGISTER_FAILURE:
            return {
                ...state,
                isRegistered: false
            }
        case registerConstants.CHANGE_REGISTER_INPUT:
            return {
                ...state,
                [action.payload.name]: action.payload.value
            }
        default:
            return state
    }
};

export default registerReducer;