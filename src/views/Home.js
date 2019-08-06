import React, { Component } from 'react';
import CardCountry from '../components/CardCountry';
import { connect } from 'react-redux';
import { handleGetCountries, handleLoader } from '../actions/index';
import searchIcon from '../assets/img/search.svg';
import searchIconGray from '../assets/img/search-gray.svg';

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: '',
      listCountries: [],
    };

    this.submitForm = this.submitForm.bind(this);
    this.filterList = this.filterList.bind(this);
    this.setList = this.setList.bind(this);
  }

  submitForm(e) { return e.preventDefault() }

  setList() {
    let list;

    if(this.state.filter.length) {
      list = this.props.countries.filter(item => {
        if((JSON.stringify(item)).includes(this.state.filter)) return item;
      });
    }else {
      list = this.props.countries.map(item => item);
    }

    this.setState({
      listCountries: list
    })
  }

  filterList(e) {
    if(e) this.setState({ filter: e.target.value });
    this.setList();
  }

  async componentWillMount() {
    this.props.openLoader({ loaderActive: true, loaderText: 'Search for data.' });
    await this.props.getCountries();
    this.props.openLoader({ loaderActive: false, loaderText: '' });
  }

  componentWillReceiveProps() {
    if(!this.state.filter.length && this.props.countries) {
      this.setState({
        listCountries: this.props.countries.map(item => item)
      })
    }
  }

  render() {
    return(
      <div className="homePage">
        <form action="get" autoComplete='off' noValidate onSubmit={ () => this.submitForm() }>
          <div className='form'>
            <div className='formGroup'>
              <input className='formInput'
                     style={{ backgroundImage: 'url(' + (this.props.defaultTheme ? searchIcon : searchIconGray) + ')' }}
                     id='search'
                     name='search'
                     onChange={ this.filterList }
                     type="text"
                     placeholder='Search for a Country'
                     value={ this.state.filter } />
            </div>
          </div>
        </form>

        <div className='grid'>
          { this.state.listCountries.map(item => ( <div className='grid_col' key={ item.alpha2Code }>
            <CardCountry dados={ item } />
          </div> )) }
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  countries: store.countries.countries,
  categories: store.countries.categories,
  defaultTheme: store.themes.defaultTheme,
});
const mapDispatchToProps = (dispatch) => ({
  getCountries: () => dispatch(handleGetCountries()),
  openLoader: (obj) => dispatch(handleLoader(obj))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
