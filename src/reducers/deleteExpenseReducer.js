import { deleteExpenseConstants } from '../constants/actionTypes';

const initialState = {
    loading: false,
    error: ''
};

const deleteExpenseReducer = (state = initialState, action) => {
    switch(action.type){
        case deleteExpenseConstants.DELETE_EXPENSE_REQUEST:
            return{
                ...state,
                loading: true,
                expense_id: action.payload
            }
        case deleteExpenseConstants.DELETE_EXPENSE_SUCCESS:
            return{
                ...state,
                loading: false
            }
        case deleteExpenseConstants.DELETE_EXPENSE_FAILURE:
            return{
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
};

export default deleteExpenseReducer;