const { allExpenseConstants, addExpenseConstants } = require("../constants/actionTypes");

const initialState = {
    loading: false,
    expenses: [],
    error: '',
    action: ''
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
        default: return state
    }
};

export default expenseReducer;