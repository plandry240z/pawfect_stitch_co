import React from 'react';
import '../css/navbar.css';
import "../index.css";
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <div className ="nav-links">
                <Link to='/home'>Home</Link>
                <Link to='/stitch'>Stitch</Link>
                <Link to='/minigame'>Minigame</Link>
                <Link to='/upcycle'>Upcycle</Link>
            </div>
        </nav>
    );
};

export default NavBar;