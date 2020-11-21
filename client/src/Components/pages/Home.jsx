import React from 'react'
import { Link } from 'react-router-dom'
import Employee from '../Employee'
import {Redirect} from 'react-router-dom'
const Home = () => {
    return (
        <div className="navbar navbar-expand-lg navbar-primary">
            <Link className="navbar-brand" to="/">Employee Records</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                        <li className="nav-item">
                        <Redirect className="nav-link" to="/employee">
                            <Link className="nav-link">Employee</Link>{Employee}</Redirect>
                        </li>
                </ul>
            </div>
        </div>
    )
}

export default Home
