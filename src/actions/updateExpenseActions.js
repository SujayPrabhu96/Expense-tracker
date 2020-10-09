import { updateExpenseConstants } from '../constants/actionTypes';
import { setSuccess, setError } from '../actions/alertActions';
import { updateExpense } from '../helpers/Expenses';

const updateExpenseRequest = (expense_id, expense) => {
    return{
        type: updateExpenseConstants.UPDATE_EXPENSE_REQUEST,
        payload: {
            expense_id, expense
        }
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

export const handleUpdateExpense = (expense_id, expense) => {
    return async (dispatch) => {
        try{
            dispatch(updateExpenseRequest(expense_id, expense));
            const response = await updateExpense(expense_id, expense);
            dispatch(updateExpenseSuccess(response));
            dispatch(setSuccess("Expense Updated"));
            return true;
        } catch(error){
            dispatch(updateExpenseFailure(error));
            dispatch(setError(error));
        }
    }
};