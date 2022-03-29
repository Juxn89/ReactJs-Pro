import React, { Fragment, useState } from 'react'

export const Counter = ( {initialValue = 0} ) => {
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
