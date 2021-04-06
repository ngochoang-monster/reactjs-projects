import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { useGlobalScope } from './context';


const Modal = () => {

    const { isOpenModal, closeModal } = useGlobalScope();

    return (
        <div className={`overlay-modal ${isOpenModal ? 'overlay-modal-open' : ''} `}>
            <div className="modal">
                <div className="modal-body">
                    <h2>Modal Content</h2>
                </div>
                <button className="close" onClick={closeModal}>
                    <FaTimes />
                </button>
            </div>
        </div>
    )
}

export default Modal;