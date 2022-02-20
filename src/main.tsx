import React from "react";
import ReactDOM from "react-dom";
import RouteManager from "./Routes";
import { ThemeProvider } from "styled-components";
import theme from "./styles/Theme";
import NavBar from "./components/NavBar";
import GlobalStyle from "./styles/global";

ReactDOM.render(
    <React.StrictMode>
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
