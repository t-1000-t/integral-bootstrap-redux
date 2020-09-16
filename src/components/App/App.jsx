import React from "react";
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import stylish from "./App.module.css";
import NavigationBoots from "../Page/NavigationBoots";

function App() {
    return (
        <div className={stylish.App}>
            <BrowserRouter>
                {/*<header className={stylish.AppHeader}>!!!!!!!!!!!!!!!!!!!!!!!</header>*/}
                <NavigationBoots/>
            </BrowserRouter>
        </div>
    );
}

export default App;
