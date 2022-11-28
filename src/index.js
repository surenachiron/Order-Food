import React from "react";
// import { render } from "react-dom";
import App from "../src/container/App";
import { BrowserRouter } from "react-router-dom";
import GlobalState from "./container/GlobalState";
import { render } from "react-dom";

render(
    <GlobalState>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </GlobalState>,
    document.getElementById('root')
)