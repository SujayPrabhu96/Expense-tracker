import React, { useEffect } from 'react';
<<<<<<< HEAD
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

=======
import { connect } from 'react-redux';
import { getUserExpenses } from '../actions/getExpenses';
import { error } from '../actions/alertActions';
import { Link } from 'react-router-dom';


function HomeComponent({ expenseData, getUserExpenses, error }) {

    useEffect(() => {
        getUserExpenses()
    }, []);

    useEffect(() => {
        expenseData.error && error("Something Went Wrong")
    }, [expenseData]);

>>>>>>> 39f95701a3d4e562750b7c113f6afa0de1d45326
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

const mapStateToProps = state => {
    return {
        expenseData: state.expenseReducer
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getUserExpenses: () => dispatch(getUserExpenses()),
        error: (message) => dispatch(error(message))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);