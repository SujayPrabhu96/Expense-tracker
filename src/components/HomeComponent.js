import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { getUserExpenses } from '../actions/getExpenses';
import { error } from '../actions/alertActions';

function HomeComponent({ expenseData, getUserExpenses, error }) {

    useEffect(() => {
        getUserExpenses()
    }, []);
    
    useEffect(() => {
        expenseData.error && error("Something Went Wrong")
    }, [expenseData]);

    return (
        <Fragment>
            <h1>Expense Tracker</h1>

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
            
        </Fragment>
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