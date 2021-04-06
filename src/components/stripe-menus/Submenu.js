import React, { useRef, useEffect } from 'react';
import { useGlobalContext } from './context';



const Submenu = () => {
    const { page: { page, links }, location, isOpenSubmenu } = useGlobalContext();
    const containerRef = useRef({});
    useEffect(() => {
        const { center, top } = location;
        containerRef.current.style.left = `${center}px`
        containerRef.current.style.top = `${top}px`
    }, [location, page, links])

    return (
        <>
            <aside className={`${isOpenSubmenu ? "submenu show" : "submenu"}`} ref={containerRef}>
                <h3 className="menu-header">{page}</h3>
                <div className="menu-main">
                    {
                        links.map((item, index) => {
                            const { label, icon, url } = item;
                            return <a href={url}
                                className="menu-link"
                                key={index}> {icon} {label}</a>
                        })

                    }
                </div>
            </aside>
        </>
    )
}


export default Submenu;