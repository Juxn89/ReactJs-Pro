import { ProductCard as ProducCardHOC } from '../components/ProductCard'; // HOC = Higher Order Component
import { ProductCardHOCProps } from '../interfaces/interfaces';

import { ProductImage } from '../components/ProductImage';
import { ProductTitle } from '../components/ProductTitle';
import { ProductButtons } from '../components/ProductButtons';

// export { ProductCard } from '../components/ProductCard';
export { ProductImage } from '../components/ProductImage';
export { ProductTitle } from '../components/ProductTitle';
export { ProductButtons } from '../components/ProductButtons';

export const ProductCard: ProductCardHOCProps = Object.assign(ProducCardHOC, {
  Title: ProductTitle,
  Image: ProductImage,
  Buttons: ProductButtons
});