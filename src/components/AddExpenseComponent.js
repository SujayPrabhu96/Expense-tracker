import React from 'react';
import { Link } from 'react-router-dom';

function AddExpenseComponent(){

    return(
        <div>
            <form>
                <h1 className="mb-5">Add Expense</h1>
                <div className="form-group row">
                    <label htmlFor="date" className="col-2"><strong>Date: </strong></label>
                    <div className="col-4">
                        <input type="text" name="date" id="date" className="form-control"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="amount" className="col-2"><strong>Amount: </strong></label>
                    <div className="col-4">
                        <input type="number" name="amount" id="amount" className="form-control"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="description" className="col-2"><strong>Description: </strong></label>
                    <div className="col-4">
                        <input type="text" name="description" id="description" className="form-control"/>
                    </div>
                </div>
                <div>
                    <input type="submit" className="btn btn-primary" value="Add"/>
                    <Link to="/" className="btn btn-danger delete">Cancel</Link>
                </div>
            </form>
        </div>
    );
}

export default AddExpenseComponent;