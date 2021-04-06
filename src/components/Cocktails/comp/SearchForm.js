import React, { useRef, useEffect } from 'react';
import { useGlobalContext } from '../context';


const SearchForm = () => {
    const { setSearchTerm } = useGlobalContext();
    const searchRef = useRef()

    useEffect(() => {
        searchRef.current.focus();
    }, []);

    function searchAction() {
        setSearchTerm(searchRef.current.value);
    }

    function handleSearch(e) {
        e.preventDefault();
    }

    return (
        <section className="search-cocktails">
            <form className="search-form" onSubmit={handleSearch}>
                <h2>Search Your Favorite Cocktail</h2>
                <input type="text" className="search-item" ref={searchRef} onChange={searchAction} />
            </form>
        </section>
    )
}

export default SearchForm;