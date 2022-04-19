import { products } from '../data/products';
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components';

const product = products[0];

export const ShoppingPage = () => {
  return (
    <div>
      <div>ShoppingPage</div>
      <hr/>
      <ProductCard key={ product.id } product={ product } initialValue={ { count: 4 } }>
        {
          ( { reset, isMaxCountReached, maxCount, increaseBy, count } ) => (
            <>
              <ProductImage />
              <ProductTitle />
              <ProductButtons />
            </>
          )
        }

      </ProductCard>
    </div>
  )
}
