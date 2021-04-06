import React, { useState, useEffect, useCallback, useContext } from 'react';

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const AppContext = React.createContext();


const AppProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [cocktails, setcocktails] = useState([]);

    const fetchData = useCallback(async () => {
        setLoading(true);
        try {
            const res = await fetch(`${url}${searchTerm}`);
            const data = await res.json();

            const { drinks } = data;

            if (drinks) {
                const newCocktails = drinks.map(item => {
                    const { idDrink, strDrink, strAlcoholic, strGlass, strDrinkThumb } = item;
                    return {
                        id: idDrink,
                        name: strDrink,
                        title: strGlass,
                        type: strAlcoholic,
                        imgLink: strDrinkThumb,
                    }

                })
                setcocktails(newCocktails)
                setLoading(false);

            }
            else {
                setcocktails([])
                setLoading(false);

            }
        } catch (err) {
            console.log(err);
            setLoading(false);
        }

    }, [searchTerm])

    useEffect(() => {
        fetchData();
    }, [searchTerm, fetchData])

    return (
        <AppContext.Provider
            value={{
                loading,
                cocktails,
                setSearchTerm,
                setLoading,
            }}
        >
            {children}
        </AppContext.Provider>)
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider };