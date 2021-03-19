import React from 'react'


function Nav() {
    return(
        <div className="navbar navbar-expand-lg bg-dark navbar-dark">
            <div className="container-fluid">
                <a href="index.html" className="navbar-brand">The Spark Foundation</a>
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                    <div className="navbar-nav ml-auto">
                        <a href="index.html" className="nav-item nav-link active">Home</a>
                        <a href="#about" className="nav-item nav-link">About</a>
                        <a href="#program" className="nav-item nav-link">Programs</a>
                        <a href="#register" className="nav-item nav-link">Register</a>
                        <a href="#contact" className="nav-item nav-link">Contact</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav;