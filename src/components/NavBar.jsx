import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/learn'>Learn</Link>
            <Link to='/stitch'>Stitch</Link>
            <Link to='/minigame'>Minigame</Link>
            <Link to='/upcycle'>Upcycle</Link>
        </nav>
    );
};

export default NavBar;