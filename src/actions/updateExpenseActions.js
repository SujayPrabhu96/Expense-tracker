import { updateExpenseConstants } from '../constants/actionTypes';
import { setSuccess, setError } from '../actions/alertActions';

const updateExpenseRequest = (expense) => {
    return{
        type: updateExpenseConstants.UPDATE_EXPENSE_REQUEST,
        payload: expense
    }
};

const updateExpenseSuccess = (response) => {
    return{
        type: updateExpenseConstants.UPDATE_EXPENSE_SUCCESS,
        payload: response
    }
};

const updateExpenseFailure = (error) => {
    return{
        type: updateExpenseConstants.UPDATE_EXPENSE_FAILURE,
        payload: error
    }
};

export const changeExpenseInput = (name, value) => {
    return{
        type: updateExpenseConstants.CHANGE_EXPENSE_INPUT,
        payload: {
            name, value
        }
    }
};

export const handleupdateExpense = (expense) => {
    return async (dispatch) => {
        try{
            dispatch(updateExpenseRequest(expense));
            dispatch(updateExpenseSuccess(expense));
            dispatch(setSuccess("Expense Updated"));
            return true;
        } catch(error){
            dispatch(updateExpenseFailure(error));
            dispatch(setError(error));
        }
    }
};