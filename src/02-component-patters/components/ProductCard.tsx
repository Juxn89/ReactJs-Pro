import style from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg'
import { useProduct } from '../hooks/useProduct';
import { createContext, ReactElement, useContext } from 'react';

interface Props {
  product: Product,
  children?: ReactElement | ReactElement[]
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

interface ProductContextProps {
  counter: number,
  increaseBy: (value: number) => void,
  product: Product
}

const ProductContext = createContext( {  } as ProductContextProps );
const { Provider } = ProductContext;

export const ProductImage = ( { img = '' } ) => {
  const { product } = useContext( ProductContext );
  let imgToShow: string;

  if(img) imgToShow = img;
  else if (product.img) imgToShow = product.img;
  else imgToShow = noImage;

  return (
    <img src={ imgToShow } alt="Coffee Mug" className={ style.productImg }/>
  );
}

export const ProductTitle = ( { title }: { title?: string } ) => {
  const { product } = useContext( ProductContext );
  let titleToShow: string;

  if(title) titleToShow = title;
  else titleToShow = product.title;

  return (
    <span className={ style.productDescription }> { titleToShow } </span>
  );
};

export const ProductButtons = () => {
  const { counter, increaseBy } = useContext( ProductContext )

  return (
    <div className={ style.buttonsContainer }>
      <button className={ style.buttonMinus } onClick= { () => increaseBy(-1) }> - </button>
      <div className={ style.countLabel }> { counter } </div>
      <button className={ style.buttonAdd } onClick= { () => increaseBy(1) }> + </button>
    </div>
  );
}

export const ProductCard = ( { children, product }: Props ) => {
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
