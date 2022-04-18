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

  useEffect( () => {
    isMounted.current = true;
  }, [] );

  useEffect(() => {
    if(!isMounted.current) return;

    setCounter(value);
  }, [value]);

  const increaseBy = (value:number) => {
    const newValue = Math.max(counter + value, 0);
    setCounter( newValue );

    // if(onChange) onChange();
    onChange && onChange( { count: newValue, product} );
  }

  return {
    counter,
    increaseBy
  }
}
