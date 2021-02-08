import React, { useEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import DatePicker from "react-datepicker";
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import { getUserExpense } from '../actions/getExpensesAction';
import { changeExpenseInput, handleUpdateExpense } from '../actions/updateExpenseActions';
import { setError, setSuccess } from '../actions/alertActions';
import Loading from './LoadingComponent';

function EditExpenseComponent(){

    let histroty = useHistory();
    const expenseData = useSelector(state => state.expenseReducer);
    const dispatch = useDispatch();
    const { expense_id } = useParams();

    const fetchExpense = () => {
        dispatch(getUserExpense(expense_id))
        .catch((error) => dispatch(setError(error)));
    }

    useEffect(() => {
        fetchExpense();
    }, [expense_id]);

    const handleDateChange = (date) => {
        let parsed_date = moment(date).format('YYYY-MM-DD');
        dispatch(changeExpenseInput("date", parsed_date));
    };

    const handleChange = (event) => {
        dispatch(changeExpenseInput(event.target.name, event.target.value));
    }

    const handleUpdateClick = (event) => {
        dispatch(handleUpdateExpense(expenseData.expense.id, expenseData.expense))
        .thee((response) => {
            dispatch(setSuccess("Expense Updated"));
            history.push("/expenses");
        })
        .catch((error) => dispatch(setError("Something Went Wrong")));
    }

    return(
        <div>
            {expenseData.loading ? <Loading /> :
            expenseData.expense  &&
            <form>
                <h1 className="mb-5">Edit Expense</h1>
                <div className="form-group row">
                    <label htmlFor="date" className="col-2"><strong>Date: </strong></label>
                    <div className="col-4">
                        <DatePicker 
                            className="form-control" 
                            selected={expenseData.expense.date && moment(expenseData.expense.date, "YYYY-MM-DD").toDate()}
                            onChange={handleDateChange}
                        >
                        </DatePicker>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="amount" className="col-2"><strong>Amount: </strong></label>
                    <div className="col-4">
                        <input type="number" name="amount" id="amount" className="form-control" value={expenseData.expense.amount} onChange={handleChange}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="description" className="col-2"><strong>Description: </strong></label>
                    <div className="col-4">
                        <input type="text" name="description" id="description" className="form-control" value={expenseData.expense.description} onChange={handleChange}/>
                    </div>
                </div>
                <div>
                    <input type="submit" className="btn btn-primary" value="Update" onClick={handleUpdateClick} disabled={expenseData.btnDisabled}/>
                    <Link to="/expenses" className="btn btn-danger delete">Cancel</Link>
                </div>
            </form>
        }
        </div>
    );
}

export default EditExpenseComponent;