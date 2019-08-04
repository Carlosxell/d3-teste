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
import {handleGetCountries, handleLoader} from "./actions";

class App extends Component {
  async componentWillMount() {
    this.props.openLoader({ loaderActive: true, loaderText: 'Search for data.' });
    await this.props.getCountries();
    this.props.openLoader({ loaderActive: false, loaderText: '' });
  }

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
  defaultTheme: store.themes.defaultTheme,
  countries: store.countries.countries,
});

const mapDispatchToProps = (dispatch) => ({
  getCountries: () => dispatch(handleGetCountries()),
  openLoader: (obj) => dispatch(handleLoader(obj))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
