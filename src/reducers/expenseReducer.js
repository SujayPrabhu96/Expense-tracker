const { allExpenseConstants } = require("../constants/actionTypes");

const initialState = {
    loading: false,
    expenses: [],
    error: ''
}

const expenseReducer = (state = initialState, action) => {
    switch(action.type){
        case allExpenseConstants.FETCH_EXPENSE_REQUEST:
            return{
                ...state,
                loading: true
            }
        case allExpenseConstants.FETCH_EXPENSE_SUCCESS:
            return{
<<<<<<< HEAD
                ...state,
=======
>>>>>>> 39f95701a3d4e562750b7c113f6afa0de1d45326
                loading: false,
                expenses: action.payload,
                error: ''
            }
        case allExpenseConstants.FETCH_EXPENSE_FAILURE:
            return{
<<<<<<< HEAD
                ...state,
=======
>>>>>>> 39f95701a3d4e562750b7c113f6afa0de1d45326
                loading: false,
                expenses: [],
                error: action.payload
            }
        default: return state
    }
};

export default expenseReducer;