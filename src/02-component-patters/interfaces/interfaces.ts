import { ReactElement } from "react";

export interface ProductCardProps {
  product: Product,
  children?: ReactElement | ReactElement[]
}

export interface Product {
  id: string;
  title: string;
  img?: string
}

export interface ProductButtonsProps {
  counter: number,
  /* Differents ways to define a function on interface */
  // increaseBy: Function
  // increaseBy: () => void
  increaseBy: (value: number) => void
}

export interface ProductContextProps {
  counter: number,
  increaseBy: (value: number) => void,
  product: Product
}

export interface ProductCardHOCProps {
  ({ children, product }: ProductCardProps): JSX.Element,
  Title: ( {title} : { title?: string }) => JSX.Element
  Image: ( {img} : { img?: string }) => JSX.Element
  Buttons: () => JSX.Element
}