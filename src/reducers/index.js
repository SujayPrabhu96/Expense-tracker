import { combineReducers } from 'redux';
import actionReducer from './actionReducer';
import  registerReducer  from './registerReducer';
import loginReducer from './loginReducer';
import expenseReducer from './expenseReducer';
import saveExpenseReducer from './saveExpenseReducer';


const rootReducer = combineReducers({
    actionReducer,
    registerReducer,
    loginReducer,
    expenseReducer,
    saveExpenseReducer
});

export default rootReducer;
