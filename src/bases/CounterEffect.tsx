import gsap from 'gsap';
import React, { Fragment, useEffect, useRef, useState } from 'react'

const MAXIMUN_CLICK = 10;

export const CounterEffect = () => {
    const [counter, setCounter] = useState(5);

    const counterElement = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
      if(counter < 10) return;

      // console.log('Se ha llegado al valor máximo.');
      console.log('%cSe ha llegado al valor máximo.', 'color: red; background-color: black');

      gsap.to(counterElement.current, { y: -10, duration: 0.2, ease: 'ease.out' } ).then( () => {
        gsap.to(counterElement.current, { y: 0, duration: 1, ease: 'bounce.out' });
      } );
    }, [counter])
    

    const handleClick = () => {
      if(counter < MAXIMUN_CLICK)
        setCounter( prev => prev + 1 );
    }

  return (
    <Fragment>
        <h1>CounterEffect: </h1>
        <h2 ref={counterElement}>{ counter }</h2>
        <button onClick={ handleClick }> +1 </button>
    </Fragment>
  )
}
