import { allExpenseConstants } from "../constants/actionTypes"
const { allExpenseConstants } = require("../constants/actionTypes");

export const getAllExpenseRequest = () => {
    return{
        type: allExpenseConstants.GETALL_REQUEST
    }
};

export const getAllExpenseSuccess = (expenses) => {
    return{
        type: allExpenseConstants.GETALL_SUCCESS,
        expenses
    }
};

export const getAllExpenseFailure = (error) => {
    return{
        type: allExpenseConstants.GETALL_FAILURE,
        error
    }
};