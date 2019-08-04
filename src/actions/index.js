import { CHANGE_THEME } from './types'

export const handleChangeTheme = (val) => (dispatch) => {
  dispatch({ type: CHANGE_THEME, defaultTheme: val });
};
