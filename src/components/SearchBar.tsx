import {ChangeEvent, useRef} from 'react';

export const SearchBar = () => {

  const debounceRef = useRef<NodeJS.Timeout>();
  const onQueryChanged = ( event: ChangeEvent<HTMLInputElement> ) => {
    if(debounceRef.current)
      clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(() => {
      console.log(`Debounde value: ${ event.target.value }`);
    }, 350);
  }

  return (
    <div className="search-container">
      <input type="text" className="form-control" placeholder="Search palce..." onChange={ onQueryChanged } />
    </div>
  );
}