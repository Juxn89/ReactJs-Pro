import React, { useContext } from 'react';
import { MapContext, PlacesContext } from '../context';

export const BtnMyLocation = () => {
  const { map, isMapReady } = useContext(MapContext);
  const { userLocation } = useContext(PlacesContext);

  const onClick = () => {
    if(!isMapReady) throw new Error('Map is not ready yet...');
    if(!userLocation) throw new Error('User location is not detected...');

    map?.flyTo({
      zoom: 15,
      center: userLocation
    });
  }

  return (
    <button className='btn btn-primary' onClick={ onClick } style={ { position: 'fixed', top: '20px', right: '20px', zIndex: 999 } }>
      My location
    </button>
  )
}