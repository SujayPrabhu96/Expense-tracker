import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute({ component: Component, ...rest }){
    return(
        <div>
            <Route {...rest} render={(props) => {
                if(!localStorage.getItem('user')){
                    console.log("HI");
                   return <Redirect to="/login" />
                }
                return <Component {...props} />
            }
            }></Route>
        </div>
    );
}

export default PrivateRoute;