import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function NavbarComponent(props) {
    
    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-light bg-light">
                <div className="navbar-header">
                    <div className="navbar-brand">
                        <Link to="/">Expense Tracker</Link>
                    </div>
                </div>
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav">
                        <div className="nav-item nav-link active">
                            <Link to="/">Home</Link>
                        </div>
                    </div>
                    {!props.user.isLoggedIn && 
                    <div className="navbar-nav ml-auto">
                        <div className="nav-item nav-link">
                            <Link to="/register">Register</Link>
                        </div>
                        <div className="nav-item nav-link">
                            <Link to="/login">Login</Link>
                        </div>
                    </div>
                    }
                    {
                        props.user.isLoggedIn && 
                        <div className="navbar-nav ml-auto">
                            <div className="nav-item nav-link">
                                <Link to="/logout">Logout</Link>
                            </div>
                        </div>
                    }
                </div>
            </nav>

        </div>
    );
}

const mapStateToProps =  state => {
    return{
        user: state.loginReducer
    }
};

export default connect(mapStateToProps, null)(NavbarComponent);