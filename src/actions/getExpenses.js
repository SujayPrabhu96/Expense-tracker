import { allExpenseConstants } from "../constants/actionTypes";
import { apis } from "../apis/endPoints";

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
        const token = JSON.parse(localStorage.getItem('user')).token;
        try{
            const requestOptions = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token
                }
            }
            const expenses = await (await fetch(apis.userExpenses, requestOptions)).json();
            dispatch(getAllExpenseSuccess(expenses));
        } catch(error){
            dispatch(getAllExpenseFailure(error));
        }
    }
};