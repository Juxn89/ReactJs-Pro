import React, { Fragment } from 'react';
import { Counter } from './bases/Counter';
import { CounterBy } from './bases/CounterBy';
import { CounterEffect } from './bases/CounterEffect';

function App() {
  return (
    <Fragment>
      <Counter initialValue={15}/>
      <hr/>
      <CounterBy />
      <hr/>
      <CounterEffect />
    </Fragment>
  );
}

export default App;
