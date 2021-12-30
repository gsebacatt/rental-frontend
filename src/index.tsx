import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ThemeProvider} from "@mui/material";
import theme from "./theme";
import {CssBaseline} from "@mui/material";

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <CssBaseline/>
        <App/>
    </ThemeProvider>,
    document.getElementById('root')
)
;

reportWebVitals();
