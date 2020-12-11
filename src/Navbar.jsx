import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <div>        
                <nav className="navbar navbar-expand-lg navbar-light bg-light px-5">
                    <span className="navbar-brand" >Ourwebsite</span>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <NavLink className="nav-link" exact activeClassName="active" to="/" >Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" exact activeClassName="active" to="/contact" >Contact</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" exact activeClassName="active" to="/about" >About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" exact activeClassName="active" to="/services" >Services</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Navbar;