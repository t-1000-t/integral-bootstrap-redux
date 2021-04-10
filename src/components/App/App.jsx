import React from "react";
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import ContactBoots from "../Page/MainBoots/ContactBoots/ContactBoots";
import ViewCategoryProducts from "../Page/MainBoots/ViewCategoryProducts";
import ViewProductPage from "../Page/MainBoots/ViewProductPage/ViewProductPage";
import routes from "../../routes/routes";
import "./App.css";
import FooterBoots from "../Page/FooterBoots/FooterBoots";
import NavigationBoots from "../Page/NavigationBoots";
import MainBoots from "../Page/MainBoots/MainBoots";


function App() {
    return (
        <BrowserRouter>
            <div className="wrapperA">
                <div className="wrapperHT">
                    <header className="header">
                        <div className="header__container">
                            <NavigationBoots/>
                        </div>
                    </header>
                    <main className="page">
                        <Switch>
                            <Route exact path={routes.HOME}><MainBoots/></Route>
                            <Route exact path={routes.CONTACT}><ContactBoots/></Route>
                            <Route path={`${routes.PRODUCTS}/:categoryNum`}><ViewCategoryProducts/></Route>
                            <Route path={`${routes.PRODUCT}/:someIdProduct`}><ViewProductPage/></Route>
                            <Redirect to={routes.HOME}/>
                        </Switch>
                    </main>
                </div>
                <footer className="footer">
                    <FooterBoots/>
                </footer>
            </div>
        </BrowserRouter>
    );
}

export default App;
