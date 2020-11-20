import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
    return (
        <div className="navbar navbar-expand-lg navbar-primary">
            <Link className="navbar-brand" to="/">Employee Records</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                     <li className="nav-item">
                        <Link className="nav-link" to="/register">Register</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/login">Login</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
