import { logout } from '../helpers/Logout';
const { loginConstants } = require("../constants/actionTypes");


const user = JSON.parse(localStorage.getItem('user'));
const initialState = {
    email: '',
    password: '',
    isLoggedIn: false
}

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
        case loginConstants.LOGOUT:
            return{
                isLoggedIn: false
            }
        default:
            return state
    }
};

export default loginReducer;