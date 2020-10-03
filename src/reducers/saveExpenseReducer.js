import { saveExpenseConstants } from '../constants/actionTypes';

const initialState = {
    loading: false,
    error: '',
    btnDisabled: false
};

export const saveExpenseReducer = (state = initialState, action) => {
    switch(action.type){
        case saveExpenseConstants.SAVE_EXPENSE_REQUEST:
            return{
                ...state,
                loading: true,
                expense: action.payload,
                btnDisabled: true
            }
        case saveExpenseConstants.SAVE_EXPENSE_SUCCESS:
            return{
                ...state,
                loading: false,
                btnDisabled: true,
                error: ''
            }
        case saveExpenseConstants.SAVE_EXPENSE_FAILURE:
            return{
                ...state,
                loading: false,
                error: action.payload
            }
        case saveExpenseConstants.CHANGE_EXPENSE_INPUT:
            return{
                ...state,
                [action.payload.name]: action.payload.value
            }
        default:
            return state
    }
};