import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  //    <React.StrictMode> 包裹之后，会开启代码检测，检测不合理的写法，ref="s"
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// 记录页面上的性能
reportWebVitals();
