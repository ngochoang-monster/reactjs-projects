import React from 'react';
import { AppProvider } from './context';
import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error';
import Navbar from './comp/Navbar';
import SingleCocktail from './pages/Singlecocktail';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Run = () => {
    return (
        <AppProvider>
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/cocktail/:id">
                        <SingleCocktail/>
                    </Route>
                    <Route path="*">
                        <Error />
                    </Route>
                </Switch>
            </Router>
        </AppProvider>
    )
}

export default Run;