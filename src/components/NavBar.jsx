import React from 'react';
import '../css/navbar.css';
import "../index.css";
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
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