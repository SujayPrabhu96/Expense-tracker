import { combineReducers } from 'redux';
import actionReducer from './actionReducer';
import registerReducer  from './registerReducer';
import loginReducer from './loginReducer';
import expenseReducer from './expenseReducer';
import saveExpenseReducer from './saveExpenseReducer';
import getExpenseReducer from './getExpenseReducer';
import updateExpenseReducer from './updateExpenseReducer';

const rootReducer = combineReducers({
    actionReducer,
    registerReducer,
    loginReducer,
    expenseReducer,
    saveExpenseReducer,
    getExpenseReducer,
    updateExpenseReducer
});

export default rootReducer;
