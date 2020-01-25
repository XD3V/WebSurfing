import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    //Route,
    //Link,
    //Switch
} from 'react-router-dom'
//import Home from './components/Home';
//import Navbar from './components/Navbar/Navbar';
//import signin from '../../routes/api/signin'
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';

// console.log(typeof App)

import { ThemeProvider } from 'styled-components'
import { theme } from './theme'

//ReactDOM.render( <App/> , document.getElementById('root') );
ReactDOM.render(
    <Router>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </Router>
    , document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();