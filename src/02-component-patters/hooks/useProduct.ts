import { useEffect, useState, useRef } from 'react';
import { InitialValues, onChanceArgs, Product } from '../interfaces/interfaces';

interface useProductArgs {
  product: Product,
  onChange?: (args: onChanceArgs) => void,
  value?: number,
  initialValue?: InitialValues
}

export const useProduct = ({onChange, product, value = 0, initialValue}: useProductArgs) => {
  const [counter, setCounter] = useState<number>( initialValue?.count || value );
  const isMounted = useRef(false);

  console.log(initialValue, counter);

  useEffect( () => {
    isMounted.current = true;
  }, [] );

  useEffect(() => {
    if(!isMounted.current) return;

    setCounter(value);
  }, [value]);

  const increaseBy = (value:number) => {
    let newValue = Math.max(counter + value, 0);

    if(initialValue?.maxCount) newValue = Math.min( newValue, initialValue.maxCount );

    setCounter( newValue );

    // if(onChange) onChange();
    onChange && onChange( { count: newValue, product} );
  }

  const reset = () => {
    setCounter(initialValue?.count || value);
  }

  return {
    counter,
    increaseBy,
    reset,
    maxCount: initialValue?.maxCount,
    isMaxCountReached: !!initialValue?.count && initialValue.maxCount === counter
  }
}
