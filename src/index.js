import React from 'react';
import ReactDOM from 'react-dom';
import './css/style.css';
import "bootstrap/dist/css/bootstrap.css"; // npm install --save bootstrap
import { BrowserRouter } from "react-router-dom";



import App from './App';

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));