import React, { Fragment, useState } from 'react'

interface CounterProps {
    initialValue?: number /* ? indicates that is optional; if ? isn't present indicate that is required*/
}

export const CounterBy = ( {initialValue = 10}: CounterProps) => {
    const [counterState, setCounterState] = useState({
      counter: initialValue,
      clicks: 0
    });

    const { counter, clicks } = counterState;

    const handleClick = (value:number) => {
        // setCounter( counter + 1 ); /* JGomez version */
        // setCounter( prev => prev + 1 ); /* FHerrera version */

        const newCounter = {
          counter: counter + value,
          clicks: clicks + 1
        }
         
        setCounterState(newCounter);
    }

  return (
    <Fragment>
        <h1>Counter: { counter } </h1>
        <h1>Clicks: { clicks } </h1>
        <button onClick={ () => handleClick(1) }> +1 </button>
        <button onClick={ () => handleClick(5) }> +5 </button>
    </Fragment>
  )
}
