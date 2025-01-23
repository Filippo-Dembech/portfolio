import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './index.css';
import { HashRouter } from "react-router";

// Import style for the tabs
import "react-tabs/style/react-tabs.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
//    <React.StrictMode>
        <HashRouter>
            <App />
        </HashRouter>
//    </React.StrictMode>
);