import React, { useReducer } from 'react';
import { Map } from 'mapbox-gl';

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
  return (
    <MapContext.Provider value={ { ...state } }>
      { children }
    </MapContext.Provider>
  )
}
