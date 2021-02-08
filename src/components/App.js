import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../App.css';
import Navbar from './NavbarComponent';
import Login from './LoginComponent';
import Register from './RegisterComponent';
import Home from './HomeComponent';
import Logout from './LogoutComponent';
import PrivateRoute from './PrivateRoute';
import { updateLoginInitialState, updateLoginStateRequest } from '../actions/loginActions';
import { checkIfUserLoggedIn, getLoginInitialState } from '../helpers/Login';
import ListExpensesComponent from './ListExpensesComponent';
import AddExpenseComponent from './AddExpenseComponent';
import EditExpenseComponent from './EditExpenseComponent';


function App() {

  const login = useSelector(state => state.loginReducer);
  const alert = useSelector(state => state.actionReducer);
  const dispatch = useDispatch();

  const updateLoginStatus = () => {
    if (checkIfUserLoggedIn()) {
      dispatch(updateLoginStateRequest());
      const user = getLoginInitialState();
      dispatch(updateLoginInitialState(user));
    }
  }

  useEffect(() => {
    updateLoginStatus();
  }, [login.isLoggedIn]);

  return (
    <div>

      <div className="container">

        <Router>
          <Navbar />
          <div className="col-8 mt-4">
            {alert && alert.message &&
              <div className={`alert ${alert.type}`}>{alert.message}</div>
            }
          </div>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/login" component={Login}></Route>
            <Route exact path="/register" component={Register}></Route>
            <Route exact path="/logout" component={Logout}></Route>
            <PrivateRoute exact path="/expenses" component={ListExpensesComponent}></PrivateRoute>
            <PrivateRoute exact path="/expenses/add-expense" component={AddExpenseComponent}></PrivateRoute>
            <PrivateRoute exact path="/expenses/edit-expense/:expense_id" component={EditExpenseComponent}></PrivateRoute>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
