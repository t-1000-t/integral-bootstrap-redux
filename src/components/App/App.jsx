import React from "react";
import {BrowserRouter} from "react-router-dom";
import stylish from "./App.module.css";
import NavigationBoots from "../Page/NavigationBoots";

function App() {
    return (
        <div className={stylish.App}>
            <BrowserRouter>
                <NavigationBoots/>
            </BrowserRouter>
        </div>
    );
}

export default App;
