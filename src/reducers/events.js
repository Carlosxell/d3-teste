import { CALL_LOADER } from '../actions/types';

const initialState = {
  loaderActive: false,
  loaderText: ''
};

export const events = (state = initialState, action) => {
  switch(action.type) {
    case CALL_LOADER:
      return {
        ...state,
        loaderActive: action.loaderActive,
        loaderText: action.loaderText,
      };

    default:
      return state;
  }
};