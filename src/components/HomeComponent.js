import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserExpenses, getUserExpense } from '../actions/getExpensesAction';
import { setError } from '../actions/alertActions';
import { handleDeleteExpense } from '../actions/deleteExpenseAction';
import { Link, useHistory } from 'react-router-dom';


function HomeComponent() {
    return(
        <div>
            <h4>Expense Tracker</h4>
        </div>
    );
}


export default HomeComponent;