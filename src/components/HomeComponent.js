import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getUserExpenses } from '../actions/getExpenses';
import { setError } from '../actions/alertActions';
import { Link } from 'react-router-dom';


function HomeComponent({ expenseData, getUserExpenses, error }) {

    useEffect(() => {
        getUserExpenses()
    }, []);

    useEffect(() => {
        expenseData.error && error("Something Went Wrong")
    }, [expenseData]);

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
        setError: (message) => dispatch(setError(message))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);