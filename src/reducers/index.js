import { combineReducers } from 'redux';
import actionReducer from './actionReducer';
import  registerReducer  from './registerReducer';
import loginReducer from './loginReducer';
import expenseReducer from './expenseReducer';

const rootReducer = combineReducers({
    actionReducer,
    registerReducer,
    loginReducer,
    expenseReducer
});

export default rootReducer;
