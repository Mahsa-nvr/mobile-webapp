import React from 'react';
import './App.css';
import './assets/font/BYekan.css';
import { HashRouter } from 'react-router-dom'

import RouteFile from './RouteFile';

function App() {
  return (
    <div className = "app">
       <HashRouter>
         <RouteFile />
       </HashRouter>
     
    </div>
  );
}

export default App;
