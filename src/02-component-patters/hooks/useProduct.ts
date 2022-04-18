import { useEffect, useState } from "react";
import { onChanceArgs, Product } from '../interfaces/interfaces';

interface useProductArgs {
  product: Product,
  onChange?: (args: onChanceArgs) => void,
  value?: number
}

export const useProduct = ({onChange, product, value = 0}: useProductArgs) => {
  const [counter, setCounter] = useState(value);

  useEffect(() => {
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
