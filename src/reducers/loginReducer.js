const { loginConstants } = require("../constants/actionTypes");

const initialState = {};

const loginReducer = (state = initialState, action) => {
    console.log(action.type);
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
        case loginConstants.UPDATE_INITIAL_LOGIN_STATE:
            return{
                ...state,
                user: action.payload,
                isLoggedIn: true
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