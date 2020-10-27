import { updateExpenseConstants } from '../constants/actionTypes';
import { setSuccess, setError } from '../actions/alertActions';
import { updateExpense } from '../helpers/Expenses';

const updateExpenseRequest = (expense) => {
    return{
        type: updateExpenseConstants.UPDATE_EXPENSE_REQUEST,
        payload: expense
    }
};

const updateExpenseSuccess = () => {
    return{
        type: updateExpenseConstants.UPDATE_EXPENSE_SUCCESS
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
        type: updateExpenseConstants.CHANGE_EXPENSE_EDIT_INPUT,
        payload: {
            name, value
        }
    }
};

export const handleUpdateExpense = (expense_id, expense) => (dispatch) => {
    dispatch(updateExpenseRequest(expense));
    updateExpense(expense_id, expense)
    .then((response) => {
        dispatch(updateExpenseSuccess());
        resolve(response);
    })
    .catch((error) => {
        dispatch(updateExpenseFailure(error));
        reject(error);
    })
};