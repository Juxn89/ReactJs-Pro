import React, { Fragment, useEffect, useRef, useState } from 'react'
import { useCounter } from '../hooks/useCounter';

const MAXIMUN_CLICK = 10;

export const CounterHook = () => {
  const { counter, counterElement, handleClick } = useCounter( { maxCount: 7 } );

  return (
    <Fragment>
        <h1>CounterHook: </h1>
        <h2 ref={counterElement}>{ counter }</h2>
        <button onClick={ handleClick }> +1 </button>
    </Fragment>
  )
}
