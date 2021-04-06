import React, { useEffect } from 'react';



const Alert = ({ msg, type, removeAlert, list }) => {

    useEffect(() => {
        const timeout = setTimeout(() => {
            removeAlert()
        }, 3000);
        return () => clearTimeout(timeout);
    }, [list])

    return (
        <article>
            <div className={`alert alert alert-${type}`}>
                <p>{msg}</p>
            </div>
        </article>
    )
}


export default Alert;