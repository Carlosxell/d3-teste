import { combineReducers } from 'redux';
import { themes } from './themes'
import { countries } from './countries'
import { events } from './events'

export const Reducers = combineReducers({
  countries: countries,
  events: events,
  themes: themes,
});