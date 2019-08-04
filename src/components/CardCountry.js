import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../assets/css/_components/_cardCountry.scss';

class CardCountry extends Component {
  render() {
    let { dados } = this.props;

    return(
      <Link to={ `/preview/${dados.alpha2Code}` } className='cardCountry'>
        <figure className='cardCountry_imgBox' style={{backgroundImage:`url('${dados.flag}')`}}>
          <img className='cardCountry_imgBox_img' src='' alt='' title={ dados.name } />
        </figure>

        <div className='cardCountry_body'>
          <h3 className='cardCountry_body_title'>{ dados.name }</h3>

          <ul className='cardCountry_body_list'>
            <li className='cardCountry_body_list_item'>
              <strong>Population: </strong>{ dados.population }
            </li>

            <li className='cardCountry_body_list_item'>
              <strong>Region: </strong>{ dados.region }
            </li>

            <li className='cardCountry_body_list_item'>
              <strong>Capital: </strong>{ dados.capital }
            </li>
          </ul>
        </div>
      </Link>
    );
  }
}

export default CardCountry;