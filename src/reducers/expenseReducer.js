const { allExpenseConstants, addExpenseConstants, saveExpenseConstants, deleteExpenseConstants, getExpenseConstants, updateExpenseConstants } = require("../constants/actionTypes");

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
                expenses: action.payload,
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
        case saveExpenseConstants.SAVE_EXPENSE_REQUEST:
            return{
                ...state,
                action: 'save',
                loading: true,
                saveBtnDisabled: true,
            }
        case saveExpenseConstants.SAVE_EXPENSE_SUCCESS:
            return{
                ...state,
                loading: false,
                saveBtnDisabled: false,
                expenses: state.expenses.concat([action.payload]),
                expense: {}
            }
        case saveExpenseConstants.SAVE_EXPENSE_FAILURE:
            return{
                ...state,
                loading: false,
                saveBtnDisabled: false,
                error: action.payload
            }
        case deleteExpenseConstants.DELETE_EXPENSE_REQUEST:
            return{
                ...state,
                action: "delete",
                loading: true,
                expense: {
                    expense_id: action.payload
                }
            }
        case deleteExpenseConstants.DELETE_EXPENSE_SUCCESS:
            return{
                ...state,
                loading: false,
                expenses: state.expenses.filter((expense) => expense.id !== state.expense.expense_id),
                expense: {}
            }
        case deleteExpenseConstants.DELETE_EXPENSE_FAILURE:
            return{
                ...state,
                loading: false,
                error: action.payload
            }
        case getExpenseConstants.GET_EXPENSE_REQUEST:
            return{
                ...state,
                action: "edit",
                loading: true,
                expense: {
                    expense_id: action.payload
                }
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
        case updateExpenseConstants.CHANGE_EXPENSE_EDIT_INPUT:
            return{
                ...state,
                expense: {
                    ...state.expense,
                    [action.payload.name]: action.payload.value
                }
            }
        case updateExpenseConstants.UPDATE_EXPENSE_REQUEST:
            return{
                ...state,
                action: "update",
                loading: true,
                saveBtnDisabled: true,
                expense: action.payload
            }
        case updateExpenseConstants.UPDATE_EXPENSE_SUCCESS:
            return{
                ...state,
                loading: false,
                saveBtnDisabled: false,
                expense: {}
            }
        case updateExpenseConstants.UPDATE_EXPENSE_FAILURE:
            return{
                ...state,
                loading: false,
                saveBtnDisabled: false,
                error: action.payload
            }
        default: return state
    }
};

export default expenseReducer;