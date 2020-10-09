import { updateExpenseConstants } from '../constants/actionTypes';

const initialState = {
    expense_id: '',
    loading: false,
    error: '',
    btnDisabled: false
}

const updateExpenseReducer = (state = initialState, action) => {
    switch(action.type){
        case updateExpenseConstants.UPDATE_EXPENSE_REQUEST:
            return{
                ...state,
                loading: true,
                btnDisabled: true,
                expense_id: action.payload.expense_id,
                expense: action.payload.expense
            }
        case updateExpenseConstants.UPDATE_EXPENSE_SUCCESS:
            return{
                ...state,
                loading: false,
                btnDisabled: false,
                response: action.payload
            }
        case updateExpenseConstants.UPDATE_EXPENSE_FAILURE:
            return{
                ...state,
                loading: false,
                btnDisabled: false,
                error: action.payload
            }
        default:
            return state;
    }
};

export default updateExpenseReducer;