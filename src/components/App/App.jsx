import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route, Redirect
} from "react-router-dom";
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
        <Router>
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
                            <Route exact path={routes.CATEGORIES}><ViewListCategory/></Route>
                            <Route path={`${routes.PRODUCTS}/:categoryNum`}><ViewCategoryProducts/>></Route>
                            <Route path={`${routes.PRODUCT}/:someIdProduct`}><ViewProduct/></Route>
                            <Redirect to={routes.HOME}/>
                        </Switch>
                    </main>
                </div>
                <footer className="footer">
                    <FooterBoots/>
                </footer>
            </div>
        </Router>
    );
}

export default App;
