import React, { Fragment, useReducer } from 'react'
import { CounterState } from './interfaces/interfaces';
import { counterReducer } from './state/counterReducer';
// import { doReset, doIncreaseBy } from './actions/actions';
import * as CounterActions from './actions/actions';

const INITIAL_STATE: CounterState = {
    counter: 0,
    previus: 0,
    changes: 0
};

export const CounterReducerRefactoring = ( ) => {
    const [counterState, dispatch] = useReducer(counterReducer, INITIAL_STATE);

    const handleReset = () => {
        // dispatch( doReset() );
        dispatch( CounterActions. doReset() );
    }

    const handleIncreaseBy = ( value: number ) => {
      // dispatch( doIncreaseBy(value) );
      dispatch( CounterActions.doIncreaseBy(value) );
    }

  return (
    <Fragment>
        <h1>Counter Reducer Refactoring: </h1>
        <pre>
            { JSON.stringify(counterState, null, 2) }
        </pre>
        <button onClick={ () => handleIncreaseBy(1) }> +1 </button>
        <button onClick={ () => handleIncreaseBy(5) }> +5 </button>
        <button onClick={ () => handleIncreaseBy(10) }> +10 </button>
        <button onClick={ handleReset }> Reset </button>
    </Fragment>
  )
}
