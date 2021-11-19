import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {Program} from './Components/Pages/Home'

ReactDOM.render(
  <React.StrictMode>
    <Program/>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
