import { saveExpenseConstants } from '../constants/actionTypes';

const saveExpenseRequest = (expense) => {
    return{
        type: saveExpenseConstants.SAVE_EXPENSE_REQUEST,
        payload: expense
    }
};

const saveExpenseSuccess = (response) => {
    return{
        type: saveExpenseConstants.SAVE_EXPENSE_SUCCESS,
        payload: response
    }
};

const saveExpenseFailure = (error) => {
    return{
        type: saveExpenseConstants.SAVE_EXPENSE_FAILURE,
        payload: error
    }
};

export const changeExpenseInput = (name, value) => {
    return{
        type: saveExpenseConstants.CHANGE_EXPENSE_INPUT,
        payload: {
            name, value
        }
    }
};