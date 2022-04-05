import { useState } from 'react';

import style from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg'

export const ProductCard = () => {
  const [counter, setCounter] = useState(0);

  const increaseBy = (value: number) => {
    setCounter(current => Math.max(current + value, 0) );
  }

  return (
    <div className={ style.productCard }>
      <img src="./coffee-mug.png" alt="Coffee Mug" className={ style.productImg }/>
      {/* <img src={ noImage } alt="Coffee Mug" className={ style.productImg }/> */}

      <span className={ style.productDescription }>Coffee Mug</span>
      <div className={ style.buttonsContainer }>
        <button className={ style.buttonMinus } onClick= { () => increaseBy(-1) }> - </button>
        <div className={ style.countLabel }> { counter } </div>
        <button className={ style.buttonAdd } onClick= { () => increaseBy(1) }> + </button>
      </div>
    </div>
  )
}
