import React from 'react';
import Cocktaillist from './Cocktaillist';
import Loading from './Loading';
import {useGlobalContext} from '../context';

const Cocktail = () => {
    const {cocktails, loading} = useGlobalContext();
    if(loading) {
        return <div className="loading-animation"><Loading/></div>
    }

    if(cocktails.length < 1) {
        return <div className="loading-animation"><span>No cocktail</span></div>
    }

    return (
        <section className="main-cocktail">
            <div className="cocktail-header">
                <h2>Cocktails</h2>
            </div>
            <div className="container-cocktails">
                {
                    cocktails.map((cocktail, i) => {
                        return (<Cocktaillist key={i} {...cocktail}/>)
                    })
                }
            </div>
        </section>
    )
}

export default Cocktail;
