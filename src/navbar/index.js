import React from "react";
import './style.css'

const Navbar = () => {
    return(
        <nav className="navbar">
            <a className="login" href="/login">Login</a>
            <a href="/products"> Products</a>
        </nav>
    )
}
export default Navbar;