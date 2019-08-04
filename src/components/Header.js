import React, { Component } from 'react';
import { connect } from 'react-redux'
import { handleChangeTheme } from '../actions/index';
import '../assets/css/_components/_header.scss'
import moon from '../assets/img/moon.svg';
import sun from '../assets/img/sun.svg';

class Header extends Component {
  render() {
    const { defaultTheme } = this.props;

    return(
      <div className='header'>
        <div className='header_content'>
          <h1 className='header_title'>Where in the world</h1>

          <div className='header_themeBox' onClick={ () => this.props.changeTheme(!defaultTheme) }>
            <img className='header_themeBox_img' src={defaultTheme ? sun : moon}
                 alt={`${defaultTheme ? 'Light' : 'Dark'} Theme`} />
            <p className='header_themeBox_text'>{defaultTheme ? 'Light' : 'Dark'} Mode</p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  defaultTheme: store.themes.defaultTheme
});

const mapDispatchToProps = (dispatch) => ({
  changeTheme: (val) => dispatch(handleChangeTheme(val))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);