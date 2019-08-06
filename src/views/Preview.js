import React, { Component } from 'react';
import { Link } from "react-router-dom";
import leftArrowIcon from '../assets/img/left-arrow.svg';
import leftArrowIconGray from '../assets/img/left-arrow-gray.svg';
import CardPreview from '../components/CardPreview';
import { handleGetCountries, handleLoader } from "../actions";
import { connect } from "react-redux";

class PreviewPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataPreview: null
    };
  }

  componentDidMount() {
    const { countryId } = this.props.match.params;

    if(this.props.countries.length) {
      this.props.openLoader({ loaderActive: true, loaderText: 'Search for data.' });
      this.setState({ dataPreview: this.props.countries.filter(item => (item.alpha2Code === countryId))[0] });
      this.props.openLoader({ loaderActive: false, loaderText: '' });
    }
  }

  componentWillReceiveProps(nextProps, nextContext) {
    const { countryId } = this.props.match.params;

    if(nextProps.countries.length) {
      this.props.openLoader({ loaderActive: true, loaderText: 'Search for data.' });
      this.setState({ dataPreview: nextProps.countries.filter(item => (item.alpha2Code === countryId))[0] });
      this.props.openLoader({ loaderActive: false, loaderText: '' });
    }
  }

  render() {
    return(
      <div className='previewPage'>
        <Link className='btnBack' to={ '/' }>
          <span className='btnBack_boxImage'>
            <img alt='Ícone do botão de volta'
                 className='btnBack_boxImage_img'
                 src={ this.props.defaultTheme ? leftArrowIcon : leftArrowIconGray } />
          </span>
          <span className='btnBack_text'>Voltar</span>
        </Link>

        { this.state.dataPreview ? ( <CardPreview dados={ this.state.dataPreview } /> ) : ( <p className='noReturn'>No Data.</p> ) }
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

export default connect(mapStateToProps, mapDispatchToProps)(PreviewPage);
