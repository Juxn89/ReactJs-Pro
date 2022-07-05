import React, { useReducer, useContext, useEffect } from 'react';
import { Map, Marker, Popup } from 'mapbox-gl';

import { PlacesContext, MapContext } from '../';
import { MapReducer } from './MapReducer';

interface Props {
  children?: JSX.Element | JSX.Element[]
}

export interface MapState {
  isMapReady: boolean,
  map?: Map,
  markers: Marker[]
}

const INITIAL_STATE: MapState = {
  isMapReady: false,
  map: undefined,
  markers: []
}

export const MapProvider = ( { children }: Props ) => {

  const [state, dispatch] = useReducer(MapReducer, INITIAL_STATE);
  const { places } = useContext(PlacesContext);

  useEffect(() => {
    state.markers.forEach(marker => marker.remove());

    const newMarkers: Marker[] = [];
    for (const place of places) {
      const [lng, lat] = place.center;
      const popup = new Popup().setHTML(`
        <h6>${place.text}</h6>
        <p>${place.place_name}</p>
      `);

      const newMarker = new Marker().setPopup(popup).setLngLat([lng, lat]).addTo(state.map!);

      newMarkers.push(newMarker);
    }
    dispatch( { type: 'setMarkers', payload: newMarkers } );
  }, [places])


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
