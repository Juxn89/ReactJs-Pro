import React, { Fragment } from 'react';
import { Counter } from './bases/Counter';
import { CounterBy } from './bases/CounterBy';
import { CounterEffect } from './bases/CounterEffect';
import { CounterHook } from './bases/CounterHook';
import { CounterReducer } from './bases/CounterReducer';

function App() {
  return (
    <Fragment>
      <Counter initialValue={15}/>
      <hr/>
      <CounterBy />
      <hr/>
      <CounterEffect />
      <hr/>
      <CounterEffect />
      <hr/>
      <CounterHook />
      <hr/>
      <CounterReducer />
    </Fragment>
  );
}

export default App;
