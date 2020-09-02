import React from 'react';

function NavbarComponent() {

    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-light bg-light">
                <div className="navbar-header">
                    <a className="navbar-brand" href="#">Expense Tracker</a>
                </div>
                <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div class="navbar-nav">
                        <a href="#" className="nav-item nav-link active">Home</a>
                    </div>
                    <div className="navbar-nav ml-auto">
                        <a href="#" className="nav-item nav-link">Login</a>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavbarComponent;