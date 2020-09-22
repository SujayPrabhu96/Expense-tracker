const { loginConstants } = require("../constants/actionTypes");

const initialState = {
    user: {
        email: '',
        password: '',
        isLoggedIn: false
    }
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
                email: action.payload.email,
                password: action.payload.password,
                isLoggedIn: true
            }
        case loginConstants.LOGIN_FAILURE:
            return{
                ...state,
                isLoggedIn: false
            }
        case loginConstants.LOGOUT:
            return{
                ...state,
                email: '',
                password: '',
                isLoggedIn: false
            }
        default:
            return state
    }
};

export default loginReducer;