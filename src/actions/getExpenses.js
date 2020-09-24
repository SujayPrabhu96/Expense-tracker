import { allExpenseConstants } from "../constants/actionTypes";

export const getAllExpenseRequest = () => {
    return{
        type: allExpenseConstants.FETHC_EXPENSE_REQUEST
    }
};

export const getAllExpenseSuccess = (expenses) => {
    return{
        type: allExpenseConstants.FETCH_EXPENSE_SUCCESS,
        payload: expenses
    }
};

export const getAllExpenseFailure = (error) => {
    return{
        type: allExpenseConstants.FETCH_EXPENSE_FAILURE,
        payload: error
    }
};