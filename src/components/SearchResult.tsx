import React, { useContext } from 'react';
import { LoadingPlaces } from '.';

import { PlacesContext } from '../context';

export const SearchResult = () => {

  const { places, isLoadingPlaces } = useContext(PlacesContext);

  if(isLoadingPlaces){
    return (
     <LoadingPlaces />
    );
  }

  if(places.length === 0) {
    return <></>;
  }

  return (
    <ul className='list-group mt-3'>
      {
        places.map(place => (
          <li className='list-group-item list-group-item-action' key={place.id}>
            <h6>{ place.text }</h6>
            <p className='text-muted' style={ { fontSize: '12px' } }>
              {place.place_name}
            </p>
            <button className='btn btn-outline-primary'>
              Directions
            </button>
          </li>
        ))
      }
    </ul>
  )
}
