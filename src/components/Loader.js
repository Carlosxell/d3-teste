import React, { Component } from 'react';
import '../assets/css/_components/_loader.scss'

class Loader extends Component {
  render() {
    return(
      <div className='loaderBox'>
        <div className='loaderBox_split'>
          <p className='loaderBox_text'>Carregando</p>
        </div>
      </div>
    );
  }
}

export default Loader;