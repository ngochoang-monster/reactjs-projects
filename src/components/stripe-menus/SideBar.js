import React from 'react';
import data from './data';
import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from './context';

const SideBar = () => {

    const { isOpenSideBar, closeSideBar } = useGlobalContext();

    return (
        <aside className={`aside-stripe ${isOpenSideBar ? 'show-aside-stripe' : ''}`}>
            <div className="aside-wraper">
                <button className="aside-close" onClick={closeSideBar}>
                    <FaTimes />
                </button>
                {
                    data.map((item, index) => {
                        return <article key={index} className="menu-stripe">
                            <h3 className="menu-header">{item.page}</h3>
                            <div className="menu-main">
                                {
                                    item.links.map((menu, index) => {
                                        const { label, icon, url } = menu;
                                        return <a href={url}
                                            className="menu-link"
                                            key={index}> {icon} {label}</a>
                                    })
                                }
                            </div>
                        </article>
                    })
                }
            </div >
        </aside >
    )
}


export default SideBar;