import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import '../App.css';
import Navbar from './NavbarComponent';
import Login from './LoginComponent';
import Register from './RegisterComponent';
import Home from './HomeComponent';
import Logout from './LogoutComponent';
import PrivateRoute from './PrivateRoute';
import { updateLoginInitialState } from '../actions/loginActions';
import { checkIfUserLoggedIn, getLoginInitialState } from '../helpers/Login';
import AddExpenseComponent from './AddExpenseComponent';
import EditExpenseComponent from './EditExpenseComponent';


function App() {

  const login = useSelector(state => state.loginReducer);
  const alert = useSelector(state => state.actionReducer);
  const dispatch = useDispatch();

  const updateLoginStatus = () => {
    if(checkIfUserLoggedIn()){
      const user = getLoginInitialState();
      dispatch(updateLoginInitialState(user));
    }
  }

  useEffect(() => {
    updateLoginStatus();
  }, [login.isLoggedIn]);

  return (
    <div className="container">
      
      <Router>
        <Navbar />
        <div className="col-8 mt-4">
        {alert && alert.message &&
          <div className={`alert ${alert.type}`}>{alert.message}</div>
        }
      </div>
        <Switch>
          <Route path="/" component={Home}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/register" component={Register}></Route>
          <Route path="/logout" component={Logout}></Route>
          <PrivateRoute exact path="/expenses" component={Home}></PrivateRoute>
          <PrivateRoute path="/add-expense" component={AddExpenseComponent}></PrivateRoute>
          <PrivateRoute path="/edit-expense" component={EditExpenseComponent}></PrivateRoute>
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
