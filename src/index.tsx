import React from 'react';
import ReactDOM from 'react-dom';

import { MapsApp } from './MapsApp';

if( !navigator.geolocation ) {
  alert('Your browser doesn\'t support geolocation.');
}

ReactDOM.render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>,
  document.getElementById('root')
);
