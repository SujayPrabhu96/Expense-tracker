import { combineReducers } from 'redux';
import actionReducer from './actionReducer';
import  registerReducer  from './registerReducer';
import loginReducer from './loginReducer';

const rootReducer = combineReducers({
    actionReducer,
    registerReducer,
    loginReducer
});

export default rootReducer;
