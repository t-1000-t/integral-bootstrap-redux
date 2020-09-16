import React from "react";
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import MainBoots from "../Page/MainBoots/MainBoots";
import NavigationBoots from "../Page/NavigationBoots";
import ContactBoots from "../Page/MainBoots/ContactBoots/ContactBoots";
import ViewCategoryProducts from "../Page/MainBoots/ViewCategoryProducts";
import routes from "../../routes/routes";
import stylish from "./App.module.css";


function App() {
    return (
        <div className={stylish.App}>
            <BrowserRouter>
                <NavigationBoots/>
                <Switch>
                    <Route exact path={routes.HOME} component={MainBoots}/>
                    <Route exact path={routes.CONTACT} component={ContactBoots}/>
                    <Route path={`${routes.PRODUCTS}/:categorynum`} component={ViewCategoryProducts}/>
                    <Redirect to={routes.HOME} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
