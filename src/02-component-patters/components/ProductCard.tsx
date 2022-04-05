import style from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg'
import { useProduct } from '../hooks/useProduct';

interface Props {
  product: Product
}

interface Product {
  id: string;
  title: string;
  img?: string
}

export const ProductCard = ( { product }: Props ) => {
  const { counter, increaseBy } = useProduct();

  return (
    <div className={ style.productCard }>
      <img src={ product.img ? product.img : noImage } alt="Coffee Mug" className={ style.productImg }/>
      {/* <img src={ noImage } alt="Coffee Mug" className={ style.productImg }/> */}

      <span className={ style.productDescription }> { product.title } </span>
      <div className={ style.buttonsContainer }>
        <button className={ style.buttonMinus } onClick= { () => increaseBy(-1) }> - </button>
        <div className={ style.countLabel }> { counter } </div>
        <button className={ style.buttonAdd } onClick= { () => increaseBy(1) }> + </button>
      </div>
    </div>
  )
}
