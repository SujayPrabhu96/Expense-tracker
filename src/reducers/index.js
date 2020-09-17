import { combineReducers } from 'redux';
import actionReducer from './actionReducer';
import  registerReducer  from './registerReducer';

const rootReducer = combineReducers({
    actionReducer,
    registerReducer
});

export default rootReducer;
