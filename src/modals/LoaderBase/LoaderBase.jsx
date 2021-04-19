import React from "react";
import {createPortal} from "react-dom";
import "./LoaderBase.css"

const LOADER = document.getElementById(
    "root-loader"
);

function LoaderBase({children}) {
    return createPortal(
        <div
            className="backdrop"
            role="presentation"
        >
            <div className="modal">
                {children}
            </div>
        </div>,
        LOADER
    );
}

export default LoaderBase;
