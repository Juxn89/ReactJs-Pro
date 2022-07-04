import { useEffect, useReducer } from "react"
import { getUserLocation } from "../../helpers"
import { PlacesContext } from "./PlacesContext"
import { PlacesReducer } from "./PlacesRudecer"
import { searchAPI } from '../../apis';

export interface PlacesState {
  isLoading: boolean,
  userLocation?: [number, number]
}

interface Props {
  children: JSX.Element | JSX.Element[]
}

const INITIAL_STATE: PlacesState = {
  isLoading: true,
  userLocation: undefined
}

export const PlacesProvider = ({children}: Props) => {
  const [state, dispatch] = useReducer(PlacesReducer, INITIAL_STATE);

  useEffect(() => {
    getUserLocation().then(
      coords => dispatch({type: 'setUserLocation', payload: coords})
    )
  }, []);

  const searchPlacesByTerm = async(query: string) => {
    if(query.length === 0) return [];
    if(!state.userLocation) throw new Error('User location not detected...');

    const resp = await searchAPI.get(`/${query}.json`, {
      params: {
        proximity: state.userLocation.join(',')
      }
    });

    console.log(resp.data);
    return resp.data;
  }


  return (
    <PlacesContext.Provider value={ {...state, searchPlacesByTerm} }>
      { children }
    </PlacesContext.Provider>
  )
}
