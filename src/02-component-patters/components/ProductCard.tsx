import { createContext, ReactElement } from 'react';
import { useProduct } from '../hooks/useProduct';
import { Product, ProductContextProps } from '../interfaces/interfaces';
import { ProductButtons } from './ProductButtons';
import { ProductImage } from './ProductImage';
import { ProductTitle } from './ProductTitle';
import style from '../styles/styles.module.css';

export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
}

export const ProductContext = createContext( {  } as ProductContextProps );
const { Provider } = ProductContext;

export const ProductCard = ( { children, product, className }: Props ) => {
  const { counter, increaseBy } = useProduct();

  return (
    <Provider value={ { counter, increaseBy, product } }>
      <div className={ `${style.productCard} ${className}` }>
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
