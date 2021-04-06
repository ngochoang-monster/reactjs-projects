import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Loading from '../comp/Loading';
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";


const Singlecocktail = () => {

    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    const [cocktail, setCocktail] = useState(null);

    useEffect(() => {
        setLoading(true);
        async function getCocktail() {
            setLoading(true);
            try {
                const res = await fetch(`${url}${id}`);
                const data = await res.json();
                const {
                    strDrink,
                    strAlcoholic,
                    strGlass,
                    strCategory,
                    strDrinkThumb,
                    strInstructions,
                    strIngredient1,
                    strIngredient2,
                    strIngredient3,
                    strIngredient4,
                    strIngredient5,
                } = data.drinks[0];

                const newCocktail = {
                    name: strDrink,
                    title: strGlass,
                    category: strCategory,
                    type: strAlcoholic,
                    imgLink: strDrinkThumb,
                    instructons: strInstructions,
                    ingredients: [
                        strIngredient1,
                        strIngredient2,
                        strIngredient3,
                        strIngredient4,
                        strIngredient5,
                    ],
                }

                setCocktail(newCocktail)
                setLoading(false);
            }
            catch (err) {
                console.error(err)
                setLoading(false);
            }
        }
        getCocktail()
    }, [id])

    console.log(cocktail)


    if (loading) {
        return <div className="loading-animation"><Loading /></div>
    }
    if (!cocktail) {
        return <div className="loading-animation"><span>No cocktail</span></div>
    } else {
        const {
            name,
            title,
            type,
            category,
            imgLink,
            instructons,
            ingredients
        } = cocktail

        return (
            <section className="single-main">
                <div className="back-home">
                    <Link to='/'>Back Home</Link>
                    <h2>{name}</h2>
                </div>
                <div className="singleCocktail">
                    <div className="main-singlecocktail">
                        <img src={imgLink} alt={name} className="img-singlecocktail" />
                        <div className="info-singlecocktail">
                            <ul>
                                <li>
                                    <p className="title-content">
                                        <span className="title-name">Name :</span>
                                        {name}</p>
                                </li>
                                <li>
                                    <p className="title-content">
                                        <span className="title-name">Category :</span>
                                        {category}</p>
                                </li>
                                <li>
                                    <p className="title-content">
                                        <span className="title-name">Info :</span>
                                        {type}</p>
                                </li>
                                <li>
                                    <p className="title-content">
                                        <span className="title-name">Glass :</span>
                                        {title}</p>
                                </li>
                                <li>
                                    <p className="title-content">
                                        <span className="title-name">Instructons :</span>
                                        {instructons}</p>
                                </li>
                                <li>
                                    <p className="title-content">
                                        <span className="title-name">Ingredients :</span>
                                        {ingredients.map((item, i) => item ? <span key={i} className="space">{item}</span> : '')}
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

}

export default Singlecocktail;