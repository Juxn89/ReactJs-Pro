import { products } from '../data/products';
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components'
import '../styles/custom-styles.css';

const product = products[0];

export const ShoppingPage = () => {
  return (
    <div>
      <div>ShoppingPage</div>
      <hr/>
      <ProductCard key={ product.id } product={ product } className='bg-dark text-white' initialValue={ { count: 4, maxCount: 10 } }>
        {
          (message) => (
            <>
              <ProductImage className='custom-image'/>
              <ProductTitle className='text-bold'/>
              <ProductButtons className='custom-buttons'/>
              <h2> { message } </h2>
            </>
          )
        }

      </ProductCard>
    </div>
  )
}
