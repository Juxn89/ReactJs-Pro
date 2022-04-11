import { useState } from "react";

export const useProduct = (onChange?: () => void) => {
  const [counter, setCounter] = useState(0);

  const increaseBy = (value:number) => {
    setCounter(current => Math.max(current + value, 0) );

    // if(onChange) onChange();
    onChange && onChange();
  }

  return {
    counter,
    increaseBy
  }
}
