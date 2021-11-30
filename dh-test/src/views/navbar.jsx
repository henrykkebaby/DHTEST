import React from 'react'
import "../styles.css"
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <nav className="Navbar">
                
                <Link to = "/" style={{ textDecoration: 'none', color:"#1a67ab" }}><h1>Find The Duck</h1></Link>

                <ul>
                    <li> <Link to = "/login" style={{ textDecoration: 'none',  color:"#1a67ab" }}>Login</Link> </li>
                    <li> <Link to = "/register" style={{ textDecoration: 'none',  color:"#1a67ab" }}>Register</Link> </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
