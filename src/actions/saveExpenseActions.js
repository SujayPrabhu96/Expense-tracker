import { saveExpenseConstants } from '../constants/actionTypes';

const saveExpenseRequest = (expense) => {
    return{
        type: saveExpenseConstants.SAVE_EXPENSE_REQUEST,
        payload: expense
    }
};

const saveExpenseSuccess = () => {
    return{
        type: saveExpenseConstants.SAVE_EXPENSE_SUCCESS
    }
};

const saveExpenseFailure = (error) => {
    return{
        type: saveExpenseConstants.SAVE_EXPENSE_FAILURE,
        payload: error
    }
};