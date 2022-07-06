import axios from 'axios';
import { API_KEYS } from '../config';

const direcctionsAPI = axios.create({
  baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
  params: {
    alternatives: false,
    geometries: 'geojson',
    overview: 'simplified',
    steps: false,
    access_token: API_KEYS.Mapbox
  }
});

export default direcctionsAPI;