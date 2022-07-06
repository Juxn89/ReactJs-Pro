import React, { useContext, useState } from 'react';
import { LoadingPlaces } from '.';

import { MapContext, PlacesContext } from '../context';
import { Feature } from '../interfaces/PlacesResponseInterface';

export const SearchResult = () => {

  const { places, isLoadingPlaces, userLocation } = useContext(PlacesContext);
  const { map, getRoutesBetweenPoints } = useContext(MapContext);

  const [ActiveId, setActiveId] = useState('');

  if(isLoadingPlaces){
    return (
     <LoadingPlaces />
    );
  }

  if(places.length === 0) {
    return <></>;
  }

  const onPlaceClicked = (place: Feature) => {
    setActiveId(place.id);
    const [lng, lat] = place.center;

    map?.flyTo({
      zoom: 14,
      center: [lng, lat]
    });
  }

  const getRoutes = (place: Feature) => {
    if(!userLocation) return;
    const [lng, lat] = place.center;

    getRoutesBetweenPoints(userLocation, [lng, lat]);
  }

  return (
    <ul className='list-group mt-3'>
      {
        places.map(place => (
          <li className={ `list-group-item list-group-item-action pointer ${(ActiveId === place.id) && 'active'} `} key={place.id} onClick= { () => onPlaceClicked(place) }>
            <h6>{ place.text }</h6>
            <p className='text-muted' style={ { fontSize: '12px' } }>
              {place.place_name}
            </p>
            <button className={ `btn btn-sm ${ActiveId === place.id ? 'btn-outline-light' : 'btn-outline-primary'}` } onClick={ () => getRoutes(place) }>
              Directions
            </button>
          </li>
        ))
      }
    </ul>
  )
}
