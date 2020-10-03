import { saveExpenseConstants } from '../constants/actionTypes';
import { saveExpense } from '../helpers/Expenses';
import { setSuccess } from './alertActions';

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

export const submitExpense = (expense) => {
    return async (dispatch) => {
        try{
            dispatch(saveExpenseRequest(expense));
            const response = await saveExpense(expense);
            dispatch(saveExpenseSuccess(expense));
            dispatch(setSuccess("Expense Saved"));
            return true;
        } catch(error){
            dispatch(saveExpenseFailure(error));
        }
    }
};