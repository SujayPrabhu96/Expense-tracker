import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import DatePicker from "react-datepicker";
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

function EditExpenseComponent(){

    const expense = useSelector(state => state.saveExpenseReducer);

    return(
        <div>
            <form>
                <h1 className="mb-5">Add Expense</h1>
                <div className="form-group row">
                    <label htmlFor="date" className="col-2"><strong>Date: </strong></label>
                    <div className="col-4">
                        <DatePicker 
                            className="form-control" 
                            selected={expense.date && moment(expense.date, "YYYY-MM-DD").toDate()} 
                        >
                        </DatePicker>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="amount" className="col-2"><strong>Amount: </strong></label>
                    <div className="col-4">
                        <input type="number" name="amount" id="amount" className="form-control" value={expense.amount}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="description" className="col-2"><strong>Description: </strong></label>
                    <div className="col-4">
                        <input type="text" name="description" id="description" className="form-control" value={expense.description}/>
                    </div>
                </div>
                <div>
                    <input type="submit" className="btn btn-primary" value="Update"/>
                    <Link to="/" className="btn btn-danger delete">Cancel</Link>
                </div>
            </form>
        </div>
    );
}

export default EditExpenseComponent;