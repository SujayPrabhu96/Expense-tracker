import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserExpenses } from '../actions/getExpensesAction';
import { setSuccess, setError } from '../actions/alertActions';
import { handleDeleteExpense } from '../actions/deleteExpenseAction';
import { Link, useHistory } from 'react-router-dom';
import Loading from './LoadingComponent';

function ListExpensesComponent(){
    let history = useHistory();
    const expenseData = useSelector(state => state.expenseReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserExpenses())
        .catch(error => dispatch(setError("Something Went Wrong")));
    }, []);

    const handleDeleteClick = (event) => {
        dispatch(handleDeleteExpense(event.target.id))
        .then(response => dispatch(setSuccess("Expense Deleted")))
        .catch(error => dispatch(setError(error)));
    };

    return (
        <div>
            <h1>Expense Tracker</h1>
            <Link to="/expenses/add-expense" className="btn btn-secondary m-2">Add Expense</Link>

            {expenseData.loading ? <Loading /> :

                <table className="table mt-3">
                    <thead>
                        <tr>
                            <th scope="col">Date</th>
                            <th scope="col">Description</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            expenseData ?. expenses && expenseData.expenses.length ?
                            (expenseData.expenses.map((expense, id) => {
                                return (
                                    <tr key={id}>
                                        <td>{expense.date}</td>
                                        <td>{expense.description}</td>
                                        <td>{expense.amount}</td>
                                        <td>
                                            <Link to={`expenses/edit-expense/${expense.id}`}>
                                                <input type="submit" className="btn btn-info" value="Edit"/>
                                            </Link>
                                            <input type="submit" className="btn btn-danger" value="Delete" id={expense.id}  onClick={handleDeleteClick}/>
                                        </td>
                                    </tr>
                                );
                            }) 
                            ) : (<tr><td colSpan="4">No Expense Available</td></tr>)
                        }
                    </tbody>
                </table>
            }

        </div>
    );
}

export default ListExpensesComponent;