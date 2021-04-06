import React from 'react';
import logo from './logo.svg';
import Menu from './Menu'
import { Link } from 'react-router-dom';
import { BsList } from 'react-icons/bs'

const Navbar = () => {
    const [showMenu, setShowMenu] = React.useState(false);

    const handleIconMenu = () => {
        setShowMenu(!showMenu);
    }

    return (
        <div className="wrapper-nav">
            <nav className="navbar-cocktail">
                <div className="navbar-center">
                    <Link to='/'>
                        <img src={logo} alt='logo' />
                    </Link>
                    <div className="icon-nav-small">
                        <BsList onClick={handleIconMenu} />
                    </div>

                    <div className="nav-menu">
                        <Menu />
                    </div>
                </div>
            </nav>
            <div className={`nav-menu-small  ${showMenu ? 'show-nav-item' : ''}`}>
                <Menu />
            </div>
        </div>)
}

export default Navbar;