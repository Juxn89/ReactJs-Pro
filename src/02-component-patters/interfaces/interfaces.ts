import { Props as ProductCardProps } from '../components/ProductCard';
import { Props as ProductTitleProps } from '../components/ProductTitle';
import { Props as ProductImageProps } from '../components/ProductImage';
import { Props as ProductButtonsProps } from '../components/ProductButtons';

export interface Product {
  id: string;
  title: string;
  img?: string
}

/*

export interface ProductButtonsProps {
  counter: number,

  // Differents ways to define a function on interface
  // increaseBy: Function
  // increaseBy: () => void

  increaseBy: (value: number) => void
}

*/

export interface ProductContextProps {
  counter: number,
  increaseBy: (value: number) => void,
  product: Product
}

export interface ProductCardHOCProps {
  ({ children, product }: ProductCardProps): JSX.Element,
  Title: ( Props : ProductTitleProps) => JSX.Element
  Image: ( Props : ProductImageProps) => JSX.Element
  Buttons: ( Props : ProductButtonsProps ) => JSX.Element
}

export interface onChanceArgs {
  product: Product,
  count: number
}