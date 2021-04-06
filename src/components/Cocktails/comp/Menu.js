import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {

    return (
        <ul className="nav-item">
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/about'>About</Link>
            </li>
        </ul>
    );
}

export default Menu;