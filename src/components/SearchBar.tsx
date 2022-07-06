import {ChangeEvent, useContext, useRef} from 'react';
import { SearchResult } from '.';
import { PlacesContext } from '../context';

export const SearchBar = () => {

  const { searchPlacesByTerm } = useContext(PlacesContext);
  const debounceRef = useRef<NodeJS.Timeout>();

  const onQueryChanged = ( event: ChangeEvent<HTMLInputElement> ) => {
    if(debounceRef.current)
      clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(() => {
      const { value: query } = event.target;
      searchPlacesByTerm(query);
    }, 350);
  }

  return (
    <div className="search-container">
      <input type="text" className="form-control" placeholder="Search palce..." onChange={ onQueryChanged } />
      <SearchResult />
    </div>
  );
}