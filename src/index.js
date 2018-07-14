import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/index.jsx';

ReactDOM.render(
  <Router
  // history={ BrowserRouter }
  routes={ Routes } 
  
  />,
  document.getElementById('root'));
