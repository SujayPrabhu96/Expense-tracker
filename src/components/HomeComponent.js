import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserExpenses, getUserExpense } from '../actions/getExpensesAction';
import { setError } from '../actions/alertActions';
import { handleDeleteExpense } from '../actions/deleteExpenseAction';
import { Link, useHistory } from 'react-router-dom';


function HomeComponent() {

    let history = useHistory();
    const expenseData = useSelector(state => state.expenseReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserExpenses())
    }, []);

    useEffect(() => {
        expenseData.error && dispatch(setError("Something Went Wrong"))
    }, [expenseData]);

    const handleDeleteClick = async (event) => {
        try{
            const response = await dispatch(handleDeleteExpense(event.target.id));
            dispatch(getUserExpenses());
        } catch(error){
            dispatch(setError(error));
        }
        
    };

    const handleEditClick = async (event) => {
        try{
            const response = await dispatch(getUserExpense(event.target.id));
            history.push("/edit-expense");
        } catch(error){
            dispatch(setError(error));
        }
    } 

    return (
        <div>
            <h1>Expense Tracker</h1>
            <Link to="/add-expense" className="btn btn-secondary m-2">Add Expense</Link>

            {expenseData.loading ? <h2>Loading....</h2> :

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
                            expenseData &&
                            expenseData.expenses &&
                            expenseData.expenses.data &&
                            expenseData.expenses.data.map((expense, id) => {
                                return (
                                    <tr key={id}>
                                        <td>{expense.date}</td>
                                        <td>{expense.description}</td>
                                        <td>{expense.amount}</td>
                                        <td>
                                            <input type="submit" className="btn btn-info" value="Edit" id={expense.id} onClick={handleEditClick}/>
                                            <input type="submit" className="btn btn-danger" value="Delete" id={expense.id}  onClick={handleDeleteClick}/>
                                        </td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            }

        </div>
    );
}


export default HomeComponent;