import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute({ component: Component, ...rest }){
    
    const login = useSelector(state => state.loginReducer);
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

export default PrivateRoute;