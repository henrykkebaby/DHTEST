import React from 'react'
import "../styles.css"
import { Link } from 'react-router-dom';

function Navbar(props) {
    return (
        <div>
            <nav className="Navbar">
                
                <Link to = "/" style={{ textDecoration: 'none', color:"#1a67ab" }}><h1>Find The Duck</h1></Link>

                <ul>
                {props.user?(<div>
                    <button onClick = {props.logout}>Sign out</button>
                    {props.user.email}
                    </div>)
                : (
                    <li> <Link to = "/login" style={{ textDecoration: 'none',  color:"#1a67ab" }}>Login</Link> </li>
                 )}
                <li> <Link to = "/register" style={{ textDecoration: 'none',  color:"#1a67ab" }}>Register</Link> </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
