import { createContext, ReactElement, CSSProperties } from 'react';
import { useProduct } from '../hooks/useProduct';
import { Product, ProductContextProps } from '../interfaces/interfaces';
import { ProductButtons } from './ProductButtons';
import { ProductImage } from './ProductImage';
import { ProductTitle } from './ProductTitle';
import styles from '../styles/styles.module.css';

export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: CSSProperties;
  onChange?: () => void;
}

export const ProductContext = createContext( {  } as ProductContextProps );
const { Provider } = ProductContext;

export const ProductCard = ( { children, product, className, style, onChange }: Props ) => {
  const { counter, increaseBy } = useProduct(onChange);

  return (
    <Provider value={ { counter, increaseBy, product } }>
      <div className={ `${styles.productCard} ${className}` } style={ style }>
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
