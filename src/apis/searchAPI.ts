import axios from 'axios';
import { API_KEYS } from '../config';

const searchAPI = axios.create({
  baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
  params: {
    limit: 5,
    language: 'es',
    access_token: API_KEYS.Mapbox,
    country: 'ni'
  }
});

export default searchAPI;