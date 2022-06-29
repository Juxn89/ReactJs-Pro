import { useEffect, useReducer } from "react"
import { getUserLocation } from "../../helpers"
import { PlacesContext } from "./PlacesContext"
import { PlacesReducer } from "./PlacesRudecer"

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
  }, [])


  return (
    <PlacesContext.Provider value={ {...state} }>
      { children }
    </PlacesContext.Provider>
  )
}
