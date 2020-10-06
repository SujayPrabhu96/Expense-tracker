import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserExpenses } from '../actions/getExpensesAction';
import { setError } from '../actions/alertActions';
import { Link } from 'react-router-dom';


function HomeComponent() {

    const expenseData = useSelector(state => state.expenseReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserExpenses())
    }, []);

    useEffect(() => {
        expenseData.error && dispatch(setError("Something Went Wrong"))
    }, [expenseData]);

    const handleDeleteClick = (event) => {
        event.preventDefault();
    };

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
                                            <input type="submit" className="btn btn-danger" value="Delete" id={id}  onClick={handleDeleteClick}/>
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