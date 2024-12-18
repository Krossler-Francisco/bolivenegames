import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    return (
        <div>
            <nav className="top-navbar">
                <ul className="top-ul-container">
                    
                </ul>
            </nav>
            <header className="app-content-container">
                <nav className="navbar">
                    <Link to="/">
                        <img src="./img/logo.png" width={220} alt="logo-enterprise" />
                    </Link>
                    <div>
                        <ul className="navbar-ul-container">
                            <li className="navbar-link">
                                <Link className="navbar-anchor" to="/">HOME</Link>
                            </li>
                            <li className="navbar-link">
                                <Link className="navbar-anchor" to="/about">ABOUT US</Link>
                            </li>
                            <li className="navbar-link">
                                <Link className="navbar-anchor" to="/news">NEWS</Link>
                            </li>
                            <li className="navbar-link">
                                <Link className="navbar-anchor" to="/contact">CONTACT</Link>
                            </li>
                        </ul>
                    </div>
                    <li className="navbar-link">
                        <Link className="navbar-anchor navbar-btn transition btn-animation" to="/singin">
                            <span className="navbar-brn-span">SING IN TO PLAY</span>
                        </Link>
                    </li>
                </nav>
            </header>
        </div>
    );
};

export default Navbar;
