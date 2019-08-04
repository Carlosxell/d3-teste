import React, { Component } from 'react';
import { connect } from 'react-redux'
import {handleGetCountries, handleLoader} from '../actions/index'

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this)
  }

  submitForm(e) {
    e.preventDefault();
  }

  async componentWillMount() {
    this.props.openLoader({ loaderActive: true, loaderText: 'Search for data.' });

    await this.props.getCountries();

    this.props.openLoader({ loaderActive: false, loaderText: '' });
  }

  render() {
    return(
      <div className="homePage">
        <form action="get" noValidate onSubmit={ () => this.submitForm() }></form>
      </div>
    );
  }
}


const mapStateToProps = store => ({ countries: store.countries.countries, categories: store.countries.categories });
const mapDispatchToProps = (dispatch) => ({
  getCountries: () => dispatch(handleGetCountries()),
  openLoader: (obj) => dispatch(handleLoader(obj))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
