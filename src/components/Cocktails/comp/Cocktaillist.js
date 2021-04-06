import React from 'react';
import { Link } from 'react-router-dom'


const Cocktaillist = ({ id, name, title, type, imgLink }) => {

    return (
        <div className="wrap-cocktail-item">
            <div className="box-cocktail">
                <img className="cocktail-img"
                    src={imgLink}
                    alt="cocktai" />
                <div className="box-cocktai">
                    <h1>{name}</h1>
                    <h3>{title}</h3>
                    <span>{type}</span>
                    <button>
                        <Link to={`/cocktail/${id}`}
                            className="button-detail-cocktail">
                            <span>Details</span>
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Cocktaillist;