import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute({ component: Component, login, ...rest }){
    
    return(
        <div>
            <Route {...rest} render={(props) => {
                if(!login.isLoggedIn){
                   return <Redirect to="/login" />
                }
                return <Component {...props} />
            }
            }></Route>
        </div>
    );
}

const mapStateToProps = state => {
    return{
        login: state.loginReducer
    }
};

export default connect(mapStateToProps, null)(PrivateRoute);