import { React, useRef, useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { links, media } from './data';
import logo from '../../logo.svg';


const Run = () => {

    const [showLink, setShowLink] = useState(false);
    const [animation, setAnimation] = useState();
    const linksRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const linksHeight = linksRef.current.getBoundingClientRect().height;
        if (showLink) {
            containerRef.current.style.height = `${linksHeight}px`;
        } else {
            containerRef.current.style.height = `0px`;
        }

    }, [showLink]);

    return (
        <nav className="nav-container" >
            <div className="nav-center">
                <div className="nav-header" >
                    <img className="img-logo" src={logo} alt="logo" />
                    <span className={`nav-iconBars ${animation}`}
                        onClick={() => setShowLink(!showLink)}
                        onMouseEnter={() => setAnimation('icon-hover')}
                        onMouseLeave={() => setAnimation('icon-hover-back')}
                    >
                        <FaBars />
                    </span>
                </div>
                <div className="nav-body" ref={containerRef}>
                    <ul ref={linksRef}>
                        {
                            links.map(item => {
                                const { id, name, link } = item;
                                return <li key={id}>
                                    <a href={link}>{name}</a>
                                </li>
                            })
                        }
                    </ul>
                </div>
                <div className="nav-social">
                    <ul>
                        {
                            media.map(item => {
                                const { id, icon, link } = item;
                                return <li key={id}>
                                    <a href={link}>{icon}</a>
                                </li>
                            })
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )

}

export default Run;