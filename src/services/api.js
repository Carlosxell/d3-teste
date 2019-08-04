import axios from 'axios';

const url = 'https://restcountries.eu/rest/v2/';

export const getCountries = () => axios.get(`${url}all`);
export const getCountriesByRegion = (region) => axios.get(`${url}region/${region}`);
