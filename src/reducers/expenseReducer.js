const { allExpenseConstants, addExpenseConstants, saveExpenseConstants } = require("../constants/actionTypes");

const initialState = {
    loading: false,
    expenses: [],
    expense: {},
    error: '',
    action: '',
    saveBtnDisabled: false
}

const expenseReducer = (state = initialState, action) => {
    switch(action.type){
        case allExpenseConstants.FETCH_EXPENSE_REQUEST:
            return{
                ...state,
                action: 'display',
                loading: true
            }
        case allExpenseConstants.FETCH_EXPENSE_SUCCESS:
            return{
                ...state,
                action: 'display',
                loading: false,
                expenses: action.payload.data,
                error: ''
            }
        case allExpenseConstants.FETCH_EXPENSE_FAILURE:
            return{
                ...state,
                action: 'display',
                loading: false,
                expenses: [],
                error: action.payload
            }
        case addExpenseConstants.ADD_EXPENSE: 
            return{
                ...state,
                action: 'add'
            }
        case saveExpenseConstants.CHANGE_EXPENSE_INPUT:
            return{
                ...state,
                expense: {
                    ...state.expense,
                    [action.payload.name]: action.payload.value
                }
            }
        default: return state
    }
};

export default expenseReducer;