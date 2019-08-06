import React, { Component } from 'react';
import '../assets/css/_components/_cardPreview.scss';

class CardPreview extends Component {
  render() {
    const { dados } = this.props;
    return (
      <div className='cardPreview'>
        <figure className='cardPreview_boxImg'>
          <img alt={ dados.name } className='cardPreview_boxImg_img' src={ dados.flag } />
        </figure>

        <div className='cardPreview_body'>
          <h2 className='cardPreview_body_title'>{ dados.name }</h2>

          <div className='cardPreview_body_grid'>
            <ul>
              <li>
                <strong>Native Name: </strong>{ dados.nativeName }
              </li>

              <li>
                <strong>Population: </strong>{ dados.population }
              </li>

              <li>
                <strong>Region: </strong>{ dados.region }
              </li>

              <li>
                <strong>Sub Region: </strong>{ dados.subregion }
              </li>

              <li>
                <strong>Capital: </strong>{ dados.capital }
              </li>
            </ul>

            <ul>
              <li>
                <strong>Top Level Domain: </strong>
                { dados.topLevelDomain.map((item, ind) =>
                  ((ind === dados.topLevelDomain.length -1) ? (item + '.') : (item + ', ')))
                }
              </li>

              <li>
                <strong>Currencies: </strong>
                {dados.currencies.map((item, ind) =>
                  ((ind === dados.currencies.length -1) ? (item.name + '.') : (item.name + ', ')))
                }
              </li>

              <li>
                <strong>Languages: </strong>
                {dados.languages.map((item, ind) =>
                  ((ind === dados.languages.length -1) ? (item.name + '.') : (item.name + ', ')))
                }
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default CardPreview;
