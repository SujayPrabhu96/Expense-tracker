import { combineReducers } from 'redux';
import actionReducer from './actionReducer';
import registerReducer  from './registerReducer';
import loginReducer from './loginReducer';
import expenseReducer from './expenseReducer';
import saveExpenseReducer from './saveExpenseReducer';
import getExpenseReducer from './getExpenseReducer';

const rootReducer = combineReducers({
    actionReducer,
    registerReducer,
    loginReducer,
    expenseReducer,
    saveExpenseReducer,
    getExpenseReducer
});

export default rootReducer;
