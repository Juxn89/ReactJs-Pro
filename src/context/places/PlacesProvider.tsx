import { useEffect, useReducer } from "react"
import { getUserLocation } from "../../helpers"
import { PlacesContext } from "./PlacesContext"
import { PlacesReducer } from "./PlacesRudecer"
import { searchAPI } from '../../apis';
import { Feature, PlacesResponseInterface } from "../../interfaces/PlacesResponseInterface";

export interface PlacesState {
  isLoading: boolean,
  userLocation?: [number, number],
  isLoadingPlaces: boolean,
  places: Feature[]
}

interface Props {
  children: JSX.Element | JSX.Element[]
}

const INITIAL_STATE: PlacesState = {
  isLoading: true,
  userLocation: undefined,
  isLoadingPlaces: false,
  places: []
}

export const PlacesProvider = ({children}: Props) => {
  const [state, dispatch] = useReducer(PlacesReducer, INITIAL_STATE);

  useEffect(() => {
    getUserLocation().then(
      coords => dispatch({type: 'setUserLocation', payload: coords})
    )
  }, []);

  const searchPlacesByTerm = async(query: string): Promise<Feature[]> => {
    if(query.length === 0) return [];
    if(!state.userLocation) throw new Error('User location not detected...');

    dispatch({ type: 'setLoadingPlaces' });

    const resp = await searchAPI.get<PlacesResponseInterface>(`/${query}.json`, {
      params: {
        proximity: state.userLocation.join(',')
      }
    });

    dispatch({type: 'setPlaces', payload: resp.data.features});
    return resp.data.features;
  }


  return (
    <PlacesContext.Provider value={ {...state, searchPlacesByTerm} }>
      { children }
    </PlacesContext.Provider>
  )
}
