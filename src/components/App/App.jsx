import React from "react";
import {BrowserRouter} from "react-router-dom";
import {Switch, Route, Redirect} from "react-router"
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
            <div className={stylish.wrapperA}>
                <div className={stylish.wrapperHT}>
                    <NavigationBoots/>
                    <Switch>
                        <Route exact path={routes.HOME} component={MainBoots}/>
                        <Route exact path={routes.CONTACT} component={ContactBoots}/>
                        {/* <Route exact path={routes.FEEDBACK} component={FeedBackForm} /> */}
                        <Route
                            path={`${routes.PRODUCTS}/:categorynum`}
                            component={ViewCategoryProducts}
                        />
                        <Route
                            path={`${routes.PRODUCT}/:someIDproduct`}
                            component={ViewProduct}
                        />

                        <Redirect to={routes.HOME}/>
                    </Switch>
                </div>
                <footer>
                    <FooterBoots/>
                </footer>
            </div>
        </BrowserRouter>
    );
}

export default App;
