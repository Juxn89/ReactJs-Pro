import React, { useState } from 'react'
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components'
import '../styles/custom-styles.css';
import { Product } from '../interfaces/interfaces';

const product = {
  id: '1',
  title: 'Coffee',
  img: './coffee-mug.png'
}

const product2 = {
  id: '1',
  title: 'Coffee Mug - Meme',
  img: './coffee-mug2.png'
}

const products: Product[] = [ product, product2 ];

interface ProductInCart extends Product {
  count: number
}

export const ShoppingPage = () => {

  const [shoppingCart, setshoppingCart] = useState<{ [key: string]: ProductInCart }>({});

  const onProdcutCountChange = ({count, product}: { count: number, product: Product }) => {
    // console.log('onProductCountChange', product);

    setshoppingCart( oldShoppingCart => {

      if(count === 0) {
        // delete ({...oldShoppingCart})[product.id];
        const { [product.id]: toDelete, ...rest } = oldShoppingCart;
        return rest;
      }

      return {
        ...oldShoppingCart,
        [product.id]: { ...product, count }
      }
     } );
  }

  return (
    <div>
      <div>ShoppingPage</div>
      <hr/>
      <div style={ { display: 'flex', flexDirection: 'row', flexWrap:'wrap' } } >

        {
          products.map( product => (
            <ProductCard key={ product.id } product={ product } className='bg-dark text-white' onChange={ (event) => onProdcutCountChange(event) } value={ shoppingCart[product.id]?.count || 0 }>
              <ProductImage className='custom-image'/>
              <ProductTitle className='text-bold'/>
              <ProductButtons className='custom-buttons'/>
            </ProductCard>
          ) )
        }

      </div>

      <div className='shopping-cart'>
        {
          Object.entries(shoppingCart).map( ([key, product]) => (
            <ProductCard key={key} product={ product } className='bg-dark text-white' style={ { width: '100px' } } value={ product.count } onChange={ onProdcutCountChange }>
              <ProductImage className='custom-image'/>
              <ProductTitle />
              <ProductButtons className='custom-buttons' style={ { display: 'flex', justifyContent: 'center' } }/>
            </ProductCard>
          ))
        }

      </div>
    </div>
  )
}
