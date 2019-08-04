import axios from 'axios';

const url = 'https://restcountries.eu/rest/v2/';

export const getAll = () => axios.get(`${url}all`);
export const getByRegion = (region) => axios.get(`${url}region/${region}`);
