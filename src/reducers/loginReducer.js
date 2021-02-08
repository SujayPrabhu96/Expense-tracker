const { loginConstants } = require("../constants/actionTypes");

const initialState = {
    loading: true
};

const loginReducer = (state = initialState, action) => {
    switch(action.type){
        case loginConstants.LOGIN_REQUEST:
            return{
                ...state,
                email: action.payload.email,
                password: action.payload.password
            }
        case loginConstants.LOGIN_SUCCESS:
            return{
                ...state,
                isLoggedIn: true,
                user: action.payload
            }
        case loginConstants.LOGIN_FAILURE:
            return{
                ...state,
                isLoggedIn: false
            }
        case loginConstants.CHANGE_LOGIN_INPUT:
            return{
                ...state,
                [action.payload.name]: action.payload.value
            }
        case loginConstants.UPDATE_LOGIN_STATE_REQUEST:
            return{
                ...state,
                loading: true
            }
        case loginConstants.UPDATE_LOGIN_STATE_SUCCESS:
            return{
                ...state,
                user: action.payload,
                isLoggedIn: true,
                loading: false
            }
        case loginConstants.LOGOUT:
            return{
                ...state,
                email: '',
                password: '',
                user: '',
                isLoggedIn: false
            }
        default:
            return state
    }
};

export default loginReducer;