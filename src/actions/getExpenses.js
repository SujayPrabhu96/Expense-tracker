import { allExpenseConstants } from "../constants/actionTypes";
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