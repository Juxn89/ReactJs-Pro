/* eslint import/no-webpack-loader-syntax: off */
import React from 'react';
import ReactDOM from 'react-dom';
//@ts-ignore
import mapboxgl from '!mapbox-gl';

import {API_KEYS} from './config'

import { MapsApp } from './MapsApp';

mapboxgl.accessToken = API_KEYS.Mapbox;

if( !navigator.geolocation ) {
  alert('Your browser doesn\'t support geolocation.');
}

ReactDOM.render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>,
  document.getElementById('root')
);
