import React, { Fragment, useState } from 'react'

interface CounterProps {
    initialValue?: number /* ? indicates that is optional; if ? isn't present indicate that is required*/
}

export const Counter = ( {initialValue = 0}: CounterProps) => {
    const [counter, setCounter] = useState(initialValue);

    const handleClick = () => {
        // setCounter( counter + 1 ); /* JGomez version */
        setCounter( prev => prev + 1 ); /* FHerrera version */
    }

  return (
    <Fragment>
        <h1>Counter: { counter } </h1>
        <button onClick={ handleClick }> +1 </button>
    </Fragment>
  )
}
