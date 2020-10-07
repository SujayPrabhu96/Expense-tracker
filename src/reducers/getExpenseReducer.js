import { getExpenseConstants } from "../constants/actionTypes";

const initialState = {
    loading: false,
    error: ''
};

const getExpenseReducer = (state = initialState, action) => {
    switch(action.type){
        case getExpenseConstants.GET_EXPENSE_REQUEST:
            return{
                ...state,
                loading: true,
                expense_id: action.payload
            }
        case getExpenseConstants.GET_EXPENSE_SUCCESS:
            return{
                ...state,
                loading: false,
                expense: action.payload
            }
        case getExpenseConstants.GET_EXPENSE_FAILURE:
            return{
                ...state,
                loading: false,
                error: action.payload
            }
        default: 
            return state;
    }
};

export default getExpenseReducer;