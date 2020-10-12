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

export const handleDeleteExpense = (expense_id) => {
    return async (dispatch) => {
        try{
            dispatch(deleteExpenseRequest(expense_id));
            const response = await deleteExpense(expense_id);
            dispatch(deleteExpenseSuccess(response));
            dispatch(setSuccess("Expense Deleted"));
            return true;
        } catch(error){
            dispatch(deleteExpenseFailure(error));
            dispatch(setError(error));
        }
    }
};