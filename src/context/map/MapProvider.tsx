import React, { useReducer } from 'react';
import { Map, Marker, Popup } from 'mapbox-gl';

import { MapContext } from './MapContext';
import { MapReducer } from './MapReducer';

interface Props {
  children?: JSX.Element | JSX.Element[]
}

export interface MapState {
  isMapReady: boolean,
  map?: Map
}

const INITIAL_STATE: MapState = {
  isMapReady: false,
  map: undefined
}

export const MapProvider = ( { children }: Props ) => {
  const [state, dispatch] = useReducer(MapReducer, INITIAL_STATE);
  const setMap = (map: Map) => {

    const myPopUp = new Popup()
      .setHTML(`
        <h4>I'm here</h4>
        <p>Somewhere in the world...</p>
      `);

    new Marker()
      .setLngLat(map.getCenter())
      .setPopup()
      .addTo(map);

    dispatch({type: 'setMap', payload: map});
  }

  return (
    <MapContext.Provider value={ { ...state, setMap } }>
      { children }
    </MapContext.Provider>
  )
}
