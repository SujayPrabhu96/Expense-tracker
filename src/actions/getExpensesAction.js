import { allExpenseConstants } from "../constants/actionTypes";
import { apis } from "../apis/endPoints";
import { listExpenses } from "../helpers/Expenses";

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

export const getUserExpenses = () => {
    return async (dispatch) => {
        dispatch(getAllExpenseRequest());
        try{
            const expenses = await listExpenses();
            dispatch(getAllExpenseSuccess(expenses));
        } catch(error){
            dispatch(getAllExpenseFailure(error));
        }
    }
};