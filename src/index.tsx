import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

import {BrowserRouter} from 'react-router-dom'
import { Routes } from './routes';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

