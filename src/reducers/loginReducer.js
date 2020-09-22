import { logout } from '../helpers/Logout';
const { loginConstants } = require("../constants/actionTypes");


const user = JSON.parse(localStorage.getItem('user'));
const initialState = (user) ?  { isLoggedIn: true, user } : { isLoggedIn: false };

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
                isLoggedIn: true,
                user: action.payload
            }
        case loginConstants.LOGIN_FAILURE:
            return{
                isLoggedIn: false
            }
        case loginConstants.LOGOUT:
            logout();
            return{
                isLoggedIn: false
            }
        default:
            return state
    }
};

export default loginReducer;