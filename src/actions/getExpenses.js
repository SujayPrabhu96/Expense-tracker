import { allExpenseConstants, getExpenseConstants } from "../constants/actionTypes";
import { listExpenses } from '../helpers/Expenses';
import { setSuccess, setError } from '../actions/alertActions';

const getAllExpenseRequest = () => {
    return{
        type: allExpenseConstants.FETCH_EXPENSE_REQUEST
    }
};

const getAllExpenseSuccess = (expenses) => {
    return{
        type: allExpenseConstants.FETCH_EXPENSE_SUCCESS,
        payload: expenses
    }
};

const getAllExpenseFailure = (error) => {
    return{
        type: allExpenseConstants.FETCH_EXPENSE_FAILURE,
        payload: error
    }
};

const getExpenseRequest = (expense_id) => {
    return{
        type: getExpenseConstants.GET_EXPENSE_REQUEST,
        payload: expense_id
    }
};

const getExpenseSuccess = (expense) => {
    return{
        type: getExpenseConstants.GET_EXPENSE_SUCCESS,
        payload: expense
    }
};

const getExpenseFailure = (error) => {
    return{
        type: getExpenseConstants.GET_EXPENSE_FAILURE,
        payload: error
    }
};

export const getUserExpenses = () => {
    return async (dispatch) => {
        try{
            dispatch(getAllExpenseRequest());
            const expenses = await listExpenses();
            dispatch(getAllExpenseSuccess(expenses));
            return true;
        } catch(error){
            dispatch(getAllExpenseFailure(error));
            dispatch(setError(error));
        }
    }
};

export const handleGetExpense = (expense_id) => {
    return async (dispatch) => {
        try{
            dispatch(getExpenseRequest(expense_id));
            const response = '';
            dispatch(getExpenseSuccess(response));
            return true;
        } catch(error){
            dispatch(getExpenseFailure(error));
            dispatch(setError("Something Went Wrong"));
        }
    }
};