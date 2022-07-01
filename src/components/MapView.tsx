import React, { useContext, useLayoutEffect, useRef } from 'react';
import { PlacesContext } from '../context';
import { Loading } from './Loading';

import mapboxgl from 'mapbox-gl';

export const MapView = () => {
  const { isLoading, userLocation } = useContext( PlacesContext );
  const mapDiv = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if(!isLoading) {
      const map = new mapboxgl.Map({
        container: mapDiv.current!, // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: userLocation, // starting position [lng, lat]
        zoom: 9, // starting zoom
      });
    }
  }, [isLoading]);

  if(isLoading) {
    return (
      <Loading/>
    )
  }

  return (
    <div ref={ mapDiv } className="mapDiv">
      { userLocation?.join(',') }
    </div>
  )
}