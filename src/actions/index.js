import { CHANGE_THEME, GET_COUNTRIES, GET_COUNTRIES_BY_REGION, CALL_LOADER } from './types'
import { getCountries, getCountriesByRegion } from '../services/api';

export const handleChangeTheme = (val) => (dispatch) => {
  dispatch({ type: CHANGE_THEME, defaultTheme: val });
};

export const handleLoader = (val) => (dispatch) => {
  let body = document.body.classList;

  val.loaderActive ? body.add('no--scroll') : body.remove('no--scroll');
  dispatch({ type: CALL_LOADER, val });
};

export const handleGetCountries = () => (dispatch) => {
  getCountries().then(res => {
    dispatch({ type: GET_COUNTRIES, countries: res.data });
  })
};

export const handleGetCountriesByRegion = (area) => (dispatch) => {
  getCountriesByRegion(area).then(res => {
    dispatch({ type: GET_COUNTRIES_BY_REGION, countries: res.data });
  })
};
