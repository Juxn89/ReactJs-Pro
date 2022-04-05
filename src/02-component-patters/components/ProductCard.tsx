import { createContext } from 'react';
import { useProduct } from '../hooks/useProduct';
import { ProductContextProps, ProductCardProps } from '../interfaces/interfaces';
import { ProductButtons } from './ProductButtons';
import { ProductImage } from './ProductImage';
import { ProductTitle } from './ProductTitle';
import style from '../styles/styles.module.css';

export const ProductContext = createContext( {  } as ProductContextProps );
const { Provider } = ProductContext;

export const ProductCard = ( { children, product }: ProductCardProps ) => {
  const { counter, increaseBy } = useProduct();

  return (
    <Provider value={ { counter, increaseBy, product } }>
      <div className={ style.productCard }>
        { children }
        {/* <ProductImage img={ product.img } />

        <ProductTitle title={ product.title } />

        <ProductButtons counter={ counter } increaseBy= { increaseBy } /> */}
      </div>
    </Provider>
  )
}

ProductCard.Title = ProductTitle;
ProductCard.Image = ProductImage;
ProductCard.Buttons = ProductButtons;
