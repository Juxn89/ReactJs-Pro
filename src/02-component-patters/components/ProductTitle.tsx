import { useContext } from 'react';
import { ProductContext } from './ProductCard';
import style from '../styles/styles.module.css';

export interface Props {
  className?: string
  title?: string;
}

export const ProductTitle = ( { title, className }: Props ) => {
  const { product } = useContext( ProductContext );
  let titleToShow: string;

  if(title) titleToShow = title;
  else titleToShow = product.title;

  return (
    <span className={ `${style.productDescription} ${className}` }> { titleToShow } </span>
  );
};