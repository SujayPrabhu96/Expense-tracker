import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import DatePicker from "react-datepicker";
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import { changeExpenseInput, submitExpense } from '../actions/saveExpenseActions';
import { setError } from '../actions/alertActions';

function AddExpenseComponent() {

    const history = useHistory();
    const expense = useSelector(state => state.saveExpenseReducer);
    const dispatch = useDispatch();

    const handleDateChange = (date) => {
        let parsed_date = moment(date).format('YYYY-MM-DD');
        dispatch(changeExpenseInput("date", parsed_date));
    };

    const handleChange = (event) => {
        dispatch(changeExpenseInput(event.target.name, event.target.value));
    }

    const handleClick = async (event) => {
        event.preventDefault();
        try {
            const response = await dispatch(submitExpense(expense));
            history.push("/expenses");
        } catch (error) {
            dispatch(setError(error));
        }
    }

    return (
        <div>
            {expense.loading ? <h2>Loading...</h2> :
                <form>
                    <h1 className="mb-5">Add Expense</h1>
                    <div className="form-group row">
                        <label htmlFor="date" className="col-2"><strong>Date: </strong></label>
                        <div className="col-4">
                            <DatePicker
                                className="form-control"
                                selected={expense.date && moment(expense.date, "YYYY-MM-DD").toDate()}
                                onChange={handleDateChange}
                            >
                            </DatePicker>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="amount" className="col-2"><strong>Amount: </strong></label>
                        <div className="col-4">
                            <input type="number" name="amount" id="amount" className="form-control" value={expense.amount} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="description" className="col-2"><strong>Description: </strong></label>
                        <div className="col-4">
                            <input type="text" name="description" id="description" className="form-control" value={expense.description} onChange={handleChange} />
                        </div>
                    </div>
                    <div>
                        <input type="submit" className="btn btn-primary" value="Add" onClick={handleClick} disabled={expense.btnDisabled} />
                        <Link to="/expenses" className="btn btn-danger delete">Cancel</Link>
                    </div>
                </form>
            }
        </div>
    );
}

export default AddExpenseComponent;