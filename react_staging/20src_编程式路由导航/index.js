import React from "react";
import ReactDom from 'react-dom';
import App from './App'
import {BrowserRouter} from "react-router-dom";
// 渲染到App页面


ReactDom.render(<BrowserRouter><App/></BrowserRouter>, document.getElementById('root'))


