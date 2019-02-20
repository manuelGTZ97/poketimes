import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="na-wrapper red darken-3">
            <div className="container">
                <a className="brand-logo">Poke' Time</a>
                <ul className="right">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;

//link solo es para las href
//navlink pone la clase active cuando se presiona