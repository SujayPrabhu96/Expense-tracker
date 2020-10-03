import { combineReducers } from 'redux';
import actionReducer from './actionReducer';
import  registerReducer  from './registerReducer';
import loginReducer from './loginReducer';
import expenseReducer from './expenseReducer';
<<<<<<< HEAD
import saveExpenseReducer from './saveExpenseReducer';
=======
>>>>>>> 39f95701a3d4e562750b7c113f6afa0de1d45326

const rootReducer = combineReducers({
    actionReducer,
    registerReducer,
    loginReducer,
<<<<<<< HEAD
    expenseReducer,
    saveExpenseReducer
=======
    expenseReducer
>>>>>>> 39f95701a3d4e562750b7c113f6afa0de1d45326
});

export default rootReducer;
