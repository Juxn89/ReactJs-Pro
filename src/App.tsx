import React, { Fragment } from 'react';
import { Counter } from './bases/Counter';

function App() {
  return (
    <Fragment>
      <Counter initialValue={15}/>
    </Fragment>
  );
}

export default App;
