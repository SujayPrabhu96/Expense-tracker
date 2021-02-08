import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Loading from './LoadingComponent';

function PrivateRoute({ component: Component, ...rest }) {

    const login = useSelector(state => state.loginReducer);
    return (
        <div>
            {login.loading ? <Loading /> :
                <Route {...rest} render={(props) => {
                    if (!login.isLoggedIn) {
                        return <Redirect to="/login" />
                    }
                    return <Component {...props} />
                }
                }></Route>
            }
        </div>
    );
}

export default PrivateRoute;