import { type } from '@testing-library/user-event/dist/type';
import React, { Fragment, useReducer, useState } from 'react'

interface CounterState {
  counter: number;
  previus: number;
  changes: number;
}

const INITIAL_STATE: CounterState = {
    counter: 0,
    previus: 0,
    changes: 0
};

type CounterAction = 
  | { type: 'IncreaseBy', payload: { value: number } }
  | { type: 'reset' };

const counterReducer = (state: CounterState, action: CounterAction): CounterState => {
  const {counter, changes} = state;
  
  switch (action.type) {
    case 'reset':      
      return INITIAL_STATE;
    case 'IncreaseBy':
      return {
        counter: (counter + action.payload.value),
        previus: counter,
        changes: changes + 1
      }
    default:
      return state;
  }
}

export const CounterReducer = ( ) => {
    const [counterState, dispatch] = useReducer(counterReducer, INITIAL_STATE);

    const handleReset = () => {
        dispatch({type: 'reset'});
    }

    const handleIncreaBy = ( value: number ) => {
      dispatch({type: 'IncreaseBy', payload: { value }});
    }

  return (
    <Fragment>
        <h1>Counter Reducer: </h1>
        <pre>
            { JSON.stringify(counterState, null, 2) }
        </pre>
        <button onClick={ () => handleIncreaBy(1) }> +1 </button>
        <button onClick={ () => handleIncreaBy(5) }> +5 </button>
        <button onClick={ () => handleIncreaBy(10) }> +10 </button>
        <button onClick={ handleReset }> Reset </button>
    </Fragment>
  )
}
