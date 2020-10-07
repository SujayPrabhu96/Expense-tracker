import { deleteExpenseConstants } from '../constants/actionTypes';

const deleteExpenseRequest = (expense_id) => {
    return{
        type: deleteExpenseConstants.DELETE_EXPENSE_REQUEST,
        payload: expense_id
    }
};

const deleteExpenseSuccess = (response) => {
    return{
        type: deleteExpenseConstants.DELETE_EXPENSE_SUCCESS,
        payload: response
    }
};

const deleteExpenseFailure = (error) => {
    return{
        type: deleteExpenseConstants.DELETE_EXPENSE_FAILURE,
        payload: error
    }
};