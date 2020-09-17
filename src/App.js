import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import { clear } from './actions/alertActions';
import Navbar from './components/NavbarComponent';
import Login from './components/LoginComponent';
import Register from './components/RegisterComponent';
import Home from './components/HomeComponent';

function App(props) {

  const [alert, setAlert] = useState(props.alert);

  useEffect(() =>{ 
      setAlert(props.alert)
   }, [props]);

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
          <Route exact path="/" component={Home}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/register" component={Register}></Route>
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    </div>
  );
}

const mapStateToProps = state => {
  console.log(state);
  return {
    alert: state.actionReducer
  }
};

const mapDispatchToProps = dispatch => {
  return {
    clear: () => dispatch(clear())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
