import React from 'react';
import { Switch, Redirect, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import HomePage from './views/Home';
import ErrorPage from './views/404';
import PreviewPage from './views/Preview';
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={ HomePage } exact path={ '/' } />
        <Route component={ PreviewPage } exact path={ '/preview/:countryId' } />
        <Route component={ ErrorPage } exact path={ '/404' } />
        <Redirect from='*' to='/404' />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
