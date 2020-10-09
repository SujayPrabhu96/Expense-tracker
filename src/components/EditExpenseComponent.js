import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import DatePicker from "react-datepicker";
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import { changeExpenseInput } from '../actions/updateExpenseActions';

function EditExpenseComponent(){

    const expenseData = useSelector(state => state.getExpenseReducer);
    const dispatch = useDispatch();

    const handleDateChange = (date) => {
        let parsed_date = moment(date).format('YYYY-MM-DD');
        dispatch(changeExpenseInput("date", parsed_date));
    };

    const handleChange = (event) => {
        dispatch(changeExpenseInput(event.target.name, event.target.value));
    }

    return(
        <div>
            {expenseData.loading ? <h2>Loading...</h2> :
            expenseData.expense && expenseData.expense.data &&
            <form>
                <h1 className="mb-5">Edit Expense</h1>
                <div className="form-group row">
                    <label htmlFor="date" className="col-2"><strong>Date: </strong></label>
                    <div className="col-4">
                        <DatePicker 
                            className="form-control" 
                            selected={expenseData.expense.data.date && moment(expenseData.expense.data.date, "YYYY-MM-DD").toDate()}
                            onChange={handleDateChange}
                        >
                        </DatePicker>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="amount" className="col-2"><strong>Amount: </strong></label>
                    <div className="col-4">
                        <input type="number" name="amount" id="amount" className="form-control" value={expenseData.expense.data.amount} onChange={handleChange}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="description" className="col-2"><strong>Description: </strong></label>
                    <div className="col-4">
                        <input type="text" name="description" id="description" className="form-control" value={expenseData.expense.data.description} onChange={handleChange}/>
                    </div>
                </div>
                <div>
                    <input type="submit" className="btn btn-primary" value="Update"/>
                    <Link to="/" className="btn btn-danger delete">Cancel</Link>
                </div>
            </form>
        }
        </div>
    );
}

export default EditExpenseComponent;