import { deleteExpenseConstants } from '../constants/actionTypes';
import { deleteExpense } from '../helpers/Expenses';
import { setSuccess, setError } from './alertActions';

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

export const handleDeleteExpense = (expense_id) => (dispatch) => {
    return new Promise((resolve, reject) => {
        dispatch(deleteExpenseRequest(expense_id));
        deleteExpense(expense_id)
        .then(response => {
            dispatch(deleteExpenseSuccess(response));
            resolve(response);
        })
        .catch(error => {
            dispatch(deleteExpenseFailure(error));
            reject(error);
        })
    })
};