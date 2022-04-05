import style from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg'
import { useProduct } from '../hooks/useProduct';
import { ReactElement } from 'react';

interface Props {
  product: Product
}

interface Product {
  id: string;
  title: string;
  img?: string
}

interface ProductButtonsProps {
  counter: number,
  /* Differents ways to define a function on interface */
  // increaseBy: Function
  // increaseBy: () => void
  increaseBy: (value: number) => void
}

export const ProductImage = ( { img = '' } ) => {
  return (
    <img src={ img ? img : noImage } alt="Coffee Mug" className={ style.productImg }/>
  );
}

export const ProductTitle = ( { title }: { title: string } ) => {
  return (
    <span className={ style.productDescription }> { title } </span>
  );
};

export const ProductButtons = ( { counter, increaseBy }: ProductButtonsProps ) => {
  return (
    <div className={ style.buttonsContainer }>
      <button className={ style.buttonMinus } onClick= { () => increaseBy(-1) }> - </button>
      <div className={ style.countLabel }> { counter } </div>
      <button className={ style.buttonAdd } onClick= { () => increaseBy(1) }> + </button>
    </div>
  );
}

export const ProductCard = ( { product }: Props ) => {
  const { counter, increaseBy } = useProduct();

  return (
    <div className={ style.productCard }>
      <ProductImage img={ product.img } />

      <ProductTitle title={ product.title } />

      <ProductButtons counter={ counter } increaseBy= { increaseBy } />
    </div>
  )
}
