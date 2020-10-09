import { getExpenseConstants, updateExpenseConstants } from "../constants/actionTypes";

const initialState = {
    loading: false,
    error: ''
};

const getExpenseReducer = (state = initialState, action) => {
    switch (action.type) {
        case getExpenseConstants.GET_EXPENSE_REQUEST:
            return {
                ...state,
                loading: true,
                expense_id: action.payload
            }
        case getExpenseConstants.GET_EXPENSE_SUCCESS:
            return {
                ...state,
                loading: false,
                expense: action.payload
            }
        case getExpenseConstants.GET_EXPENSE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case updateExpenseConstants.CHANGE_EXPENSE_INPUT:
            return {
                ...state,
                expense: {
                    ...state.expense,
                    data: {
                        ...state.expense.data,
                        [action.payload.name]: action.payload.value
                    }
                }
            }
        default:
            return state;
    }
};

export default getExpenseReducer;