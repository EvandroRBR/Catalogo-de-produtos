import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';

import Catalog from './pages/catalog';
import Register from './pages/register';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route path = '/catalog' component = { Catalog } /> 
      <Route path = '/' exact component = { Register } />
    </BrowserRouter>
  )
}

export default Routes;