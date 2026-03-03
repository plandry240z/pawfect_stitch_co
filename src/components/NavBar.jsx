import React from 'react';
import '../css/navbar.css';
import "../index.css";
import { NavLink } from 'react-router-dom';
import logo from "../images/logo.png";

const NavBar = () => {
    return (
        <nav>
            <img className="paw-logo" src={logo} alt="Paw Logo" />
            <div className ="nav-links">
                <NavLink to='/home'className={({ isActive }) => isActive ?'active-home' : '' }>Home</NavLink>
                <NavLink to='/stitch'className={({ isActive }) => isActive ?'active-stitch' : '' }>Stitch</NavLink>
                <NavLink to='/upcycle'className={({ isActive }) => isActive ?'active-upcycle' : '' }>Upcycle</NavLink>
                <NavLink to='/minigame'className={({ isActive }) => isActive ?'active-minigame' : '' }>Minigame</NavLink>
            </div>
        </nav>
    );
};

export default NavBar;