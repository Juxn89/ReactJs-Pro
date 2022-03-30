import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from 'gsap';

export const useCounter = ( { maxCount = 1 } ) => {

    const [counter, setCounter] = useState(5);

    const elementoToAnimate = useRef<any>(null);

    const timeLine = useRef( gsap.timeline() );

    useLayoutEffect(() => {
      if(!elementoToAnimate.current) return;

      timeLine.current.to(elementoToAnimate.current, { y: -10, duration: 0.2, ease: 'ease.out' } )
                      .to(elementoToAnimate.current, { y: 0, duration: 1, ease: 'bounce.out' })
                      .pause();
    }, [])

    useEffect(() => {
      // if(counter < 10) return;

      // console.log('Se ha llegado al valor máximo.');
      
      // timeLine.current.to(counterElement.current, { y: -10, duration: 0.2, ease: 'ease.out' } )
      //                 .to(counterElement.current, { y: 0, duration: 1, ease: 'bounce.out' });

      timeLine.current.play();
      
      console.log('%cSe ha llegado al valor máximo. ', 'color: red; background-color: black');      
    }, [counter])
    

    const handleClick = () => {
      if(counter < maxCount)
        setCounter( prev => prev + 1 );
    }

    return {
        counter,
        counterElement: elementoToAnimate,
        handleClick
    };
}