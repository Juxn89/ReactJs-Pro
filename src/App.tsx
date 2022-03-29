import React, { Fragment } from 'react';
import { Counter } from './bases/Counter';
import { CounterBy } from './bases/CounterBy';

function App() {
  return (
    <Fragment>
      <Counter initialValue={15}/>
      <hr/>
      <CounterBy />
    </Fragment>
  );
}

export default App;
