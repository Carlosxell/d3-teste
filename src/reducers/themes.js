import { CHANGE_THEME } from '../actions/types';

const initialState = {
  defaultTheme: true
};

export const themes = (state = initialState, action) => {
  switch(action.type) {
    case CHANGE_THEME:
      return {
        ...state,
        defaultTheme: action.defaultTheme
      };

    default:
      return state;
  }
};
