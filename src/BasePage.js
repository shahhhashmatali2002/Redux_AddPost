import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cards from "./Components/Card";

const BasePage = () => {
    return(
        <Router>
            <Switch>
                <Route exact path={"/"} component={Cards} />
            </Switch>
        </Router>
    )
};

export default BasePage;