import React from 'react';
import { FaBars } from 'react-icons/fa';
import logo from './public/images/logo.svg';
import { useGlobalContext } from './context';


const Navbar = () => {

    const { openSideBar, openSubmenu, closeSubmenu } = useGlobalContext();

    const displaySubmenu = (e) => {
        const page = e.target.textContent;
        const tempBtn = e.target.getBoundingClientRect();
        const center = (tempBtn.left + tempBtn.right) / 2;
        const top = tempBtn.bottom - 3;
        openSubmenu(page, { center, top });
    }

    const handleSubmenu = (e) => {
        if (!e.target.classList.contains('btn-menu-large')) {
            closeSubmenu()
        }
    }

    return (
        <nav className="wraper-header-stripe" onMouseOver={handleSubmenu}>
            <div className="nav-header-stripe">
                <img src={logo} alt="logo" className="logo-stripe" />
            </div>
            <button className={`btn-open-sidebar`} onClick={openSideBar}>
                <FaBars />
            </button>
            <ul className="menu-large">
                <li className="menu-large-item">
                    <button className="btn-menu-large" onMouseOver={displaySubmenu}>Products</button>
                </li>
                <li className="menu-large-item">
                    <button className="btn-menu-large" onMouseOver={displaySubmenu}>Developers</button>
                </li>
                <li className="menu-large-item">
                    <button className="btn-menu-large" onMouseOver={displaySubmenu}>Company</button>
                </li>
            </ul>
            <button className='btn-sign hide'>
                <a href="https://stripe.com" alt="sign">Sign in</a>
            </button>
        </nav>
    )
}


export default Navbar;