import React from "react";
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import MainBoots from "../Page/MainBoots/MainBoots";
import NavigationBoots from "../Page/NavigationBoots";
import ContactBoots from "../Page/MainBoots/ContactBoots/ContactBoots";
import ViewCategoryProducts from "../Page/MainBoots/ViewCategoryProducts";
import ViewProduct from "../Page/MainBoots/ViewProduct/ViewProduct";
import routes from "../../routes/routes";
import stylish from "./App.module.css";
import FooterBoots from "../Page/FooterBoots/FooterBoots";


function App() {
    return (
        <BrowserRouter>
            <div className={stylish.App}>
                <NavigationBoots/>
                <Switch>
                    <Route exact path={routes.HOME} component={MainBoots}/>
                    <Route exact path={routes.CONTACT} component={ContactBoots}/>
                    <Route path={`${routes.PRODUCTS}/:categorynum`} component={ViewCategoryProducts}/>
                    <Route path={`${routes.PRODUCT}/:someIDproduct`} component={ViewProduct}/>
                    <Redirect to={routes.HOME}/>
                </Switch>
                <footer className={stylish.appFooter}>
                    <FooterBoots/>
                </footer>
            </div>
        </BrowserRouter>

    );
}

export default App;
