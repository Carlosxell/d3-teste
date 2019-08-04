import { GET_COUNTRIES } from '../actions/types';
import { categories } from '../utils/categories';

const initialState = {
  categories: categories,
  countries: [],
};

export const countries = (state = initialState, action) => {
  switch(action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countries: action.countries
      };

    default:
      return state;
  }
};
