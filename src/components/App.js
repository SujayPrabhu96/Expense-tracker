import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
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

function App(props) {
  console.log(props);
  const [alert, setAlert] = useState(props.alert);
 
  useEffect(() =>{ 
      setAlert(props.alert);
  }, [props]);

  useEffect(() => {
    updateLoginStatus();
  }, [props.login.isLoggedIn]);

  function updateLoginStatus(){
    if(checkIfUserLoggedIn()){
      const user = getLoginInitialState();
      props.updateLoginInitialState(user);
    }
  }

  return (
    <div className="container">
      
      <Router>
        <Navbar />
        <div className="col-8 mt-4">
        {alert.message &&
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

const mapStateToProps = state => {
  
  return {
    alert: state.actionReducer,
    login: state.loginReducer
  }
};

const mapDispatchToProps = {
  updateLoginInitialState
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
