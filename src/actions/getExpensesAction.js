import { allExpenseConstants, getExpenseConstants } from "../constants/actionTypes";
import { listExpenses, getExpense } from "../helpers/Expenses";
import { setError } from "../actions/alertActions";

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

export const getUserExpenses = () => (dispatch) => {
    return new Promise((resolve, reject) => {
        dispatch(getAllExpenseRequest());
        listExpenses()
        .then(expenses => {
            dispatch(getAllExpenseSuccess(expenses));
            resolve(expenses);
        })
        .catch(error => {
            dispatch(getAllExpenseFailure(error));
            reject(error);
        })
    })
};

export const getUserExpense = (expense_id) => (dispatch) => {
    dispatch(getExpenseRequest(expense_id));
    getExpense(expense_id)
    .then((response) => {
        dispatch(getExpenseSuccess(response));
        resolve(response);
    })
    .catch((error) => {
        dispatch(getExpenseFailure(error));
        reject(error);
    });
};