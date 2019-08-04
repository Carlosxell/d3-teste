import React, { Component } from 'react';
import { Switch, Redirect, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import Header from './components/Header';
import HomePage from './views/Home';
import ErrorPage from './views/404';
import PreviewPage from './views/Preview';
import './App.css'
import './assets/css/app.scss'

class App extends Component {
  render() {
    const { defaultTheme } = this.props;

    return(
      <div className={ `app${defaultTheme ? '' : ' theme--light'}` }>
        <Header />

        <div className='app_body'>
          <BrowserRouter>
            <Switch>
              <Route component={ HomePage } exact path={ '/' } />
              <Route component={ PreviewPage } exact path={ '/preview/:countryId' } />
              <Route component={ ErrorPage } exact path={ '/404' } />
              <Redirect from='*' to='/404' />
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  defaultTheme: store.themes.defaultTheme
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);
