import { updateExpenseConstants } from '../constants/actionTypes';

const initialState = {
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
                expense: action.payload
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
        case updateExpenseConstants.CHANGE_EXPENSE_INPUT:
            return{
                ...state,
                [action.payload.name]: action.payload.value
            }
        default:
            return state;
    }
};

export default updateExpenseReducer;