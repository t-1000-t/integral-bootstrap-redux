import React from "react";
import {BrowserRouter} from "react-router-dom";
import {Switch, Route, Redirect} from "react-router"
import ContactBoots from "../Page/MainBoots/ContactBoots/ContactBoots";
import ViewCategoryProducts from "../Page/MainBoots/ViewCategoryProducts";
import ViewProduct from "../Page/MainBoots/ViewProduct/ViewProduct";
import routes from "../../routes/routes";
import "./App.css";
import FooterBoots from "../Page/FooterBoots/FooterBoots";
import ViewListCategory from "../Page/MainBoots/ViewListCategory/ViewListCategory";
import NavigationBoots from "../Page/NavigationBoots";
import MainBoots from "../Page/MainBoots/MainBoots";

function App() {
    return (

        <BrowserRouter>
            <header className="header">
                <div className="header__container">
                    <NavigationBoots />
                </div>
            </header>
                    <Switch>
                        <Route exact path={routes.HOME} component={MainBoots}/>
                        <Route exact path={routes.CONTACT} component={ContactBoots}/>
                        {/* <Route exact path={routes.FEEDBACK} component={FeedBackForm} /> */}
                        <Route
                            exact path={`${routes.CATEGORIES}`}
                            component={ViewListCategory}
                        />
                        <Route
                            path={`${routes.PRODUCTS}/:categoryNum`}
                            component={ViewCategoryProducts}
                        />
                        <Route
                            path={`${routes.PRODUCT}/:someIdProduct`}
                            component={ViewProduct}
                        />
                        <Redirect to={routes.HOME}/>
                    </Switch>
            <footer>
                <FooterBoots/>
            </footer>
        </BrowserRouter>
    );
}

export default App;
