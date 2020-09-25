import { saveExpenseConstants } from '../constants/actionTypes';

const initialState = {
    loading: false,
    error: ''
};

export const saveExpenseReducer = (state = {}, action) => {
    switch(action.type){
        case saveExpenseConstants.SAVE_EXPENSE_REQUEST:
            return{
                ...state,
                loading: true,
                expense: action.payload
            }
        case saveExpenseConstants.SAVE_EXPENSE_SUCCESS:
            return{
                loading: false,
                error: ''
            }
        case saveExpenseConstants.SAVE_EXPENSE_FAILURE:
            return{
                loading: false,
                error: action.payload
            }
    }
};