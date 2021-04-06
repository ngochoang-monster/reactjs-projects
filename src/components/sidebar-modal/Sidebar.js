import React from 'react';
import { FaTimes } from 'react-icons/fa';
import logo from '../../logo.svg';
import { links, social } from './data';
import { useGlobalScope } from './context';


const Sidebar = () => {
    const { isOpenSideBar, closeSideBar } = useGlobalScope();

    return (
        <div className={`wrapper-sidebar ${isOpenSideBar ? 'wrapper-sidebar-open' : ''}`}>
            <div className="side-header">
                <img src={logo} alt="logo" className="logo" />
                <button className="close-side" onClick={closeSideBar}>
                    <FaTimes />
                </button>
            </div>
            <div className="side-content">
                <ul>
                    {
                        links.map(item => {
                            const { id, url, text, icon } = item;

                            return <li key={id}>
                                <a href={url}>{icon} {text}</a>
                            </li>
                        })
                    }
                </ul>
            </div>
            <div className="side-footer">
                <ul>
                    {
                        social.map(item => {
                            const { id, url, icon } = item;

                            return <li key={id}>
                                <a href={url}>{icon}</a>
                            </li>
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Sidebar;