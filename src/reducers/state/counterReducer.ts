import { CounterAction } from "../actions/actions";
import { CounterState } from "../interfaces/interfaces";

export const counterReducer = (state: CounterState, action: CounterAction): CounterState => {
    const {counter, changes} = state;
    
    switch (action.type) {
      case 'reset':      
        return {
            counter: 0,
            previus: 0,
            changes: 0
          };
      case 'IncreaseBy':
        return {
          counter: (counter + action.payload.value),
          previus: counter,
          changes: changes + 1
        }
      default:
        return state;
    }
  };