import React, { Component } from 'react';
import CardCountry from '../components/CardCountry';
import { connect } from 'react-redux'
import { handleGetCountries, handleLoader } from '../actions/index'

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this)
  }

  submitForm(e) { return e.preventDefault() }

  render() {
    return(
      <div className="homePage">
        <form action="get" noValidate onSubmit={ () => this.submitForm() }>
          <div className='form'>
            <div className='formGroup'>
              <input className='formInput'
                     id='search'
                     name='search'
                     type="text"
                     placeholder='Search for a Country' />
            </div>
          </div>
        </form>

        <div className='grid'>
          { this.props.countries.map(item => ( <div className='grid_col' key={ item.alpha2Code }>
            <CardCountry dados={ item } />
          </div> )) }
        </div>
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
