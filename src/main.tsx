import React from "react";
import ReactDOM from "react-dom";
import RouteManager from "./Routes";
import { ThemeProvider } from "styled-components";
import theme from "./styles/Theme";
import NavBar from "./components/NavBar";
import GlobalStyle from "./styles/global";

ReactDOM.render(
    <React.StrictMode>
        <head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
                href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700&display=swap"
                rel="stylesheet"
            />
        </head>
        <main>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <NavBar />
                <RouteManager />
            </ThemeProvider>
        </main>
    </React.StrictMode>,
    document.getElementById("root")
);
