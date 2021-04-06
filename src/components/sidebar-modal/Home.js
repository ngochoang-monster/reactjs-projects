import React from 'react';
import { FaBars } from 'react-icons/fa';
import { useGlobalScope } from './context';


const Home = () => {

    const { openSideBar, openModal } = useGlobalScope();

    console.log(useGlobalScope());

    return (
        <div className="content">
            <button className="btn-sidebar" onClick={openSideBar}>
                <FaBars />
            </button>

            <div className="btn-show" onClick={openModal}>
                <button className="btn-show-modal">
                    <span>Show Modal</span>
                </button>
            </div>
        </div>
    )
}

export default Home;