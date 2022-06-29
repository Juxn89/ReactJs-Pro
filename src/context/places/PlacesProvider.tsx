import { useReducer } from "react"
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

  return (
    <PlacesContext.Provider value={ {...state} }>
      { children }
    </PlacesContext.Provider>
  )
}
