import React, { useState, useEffect } from 'react';
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

function App() {

  const login = useSelector(state => state.loginReducer);
  const state_alert = useSelector(state => state.actionReducer);
  const dispatch = useDispatch();
  const [alert, setAlert] = useState(state_alert);
 
  useEffect(() =>{ 
      setAlert(state_alert);
  }, [state_alert]);

  useEffect(() => {
    updateLoginStatus();
  }, [login.isLoggedIn]);

  function updateLoginStatus(){
    if(checkIfUserLoggedIn()){
      const user = getLoginInitialState();
      dispatch(updateLoginInitialState(user));
    }
  }

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
          <PrivateRoute exact path="/" component={Home}></PrivateRoute>
          <Route path="/login" component={Login}></Route>
          <Route path="/register" component={Register}></Route>
          <Route path="/logout" component={Logout}></Route>
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
