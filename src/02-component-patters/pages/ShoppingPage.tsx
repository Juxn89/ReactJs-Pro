import React from 'react'
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components'
import '../styles/custom-styles.css';

export const ShoppingPage = () => {
  const product = {
    id: '1',
    title: 'Coffee',
    img: './coffee-mug.png'
  }

  return (
    <div>
      <div>ShoppingPage</div>
      <hr/>
      <div style={ { display: 'flex', flexDirection: 'row', flexWrap:'wrap' } } >
        <ProductCard product={ product } className='bg-dark text-white'>
          <ProductCard.Image className='custom-buttons'/>
          <ProductCard.Title title={ 'My Coffee' } className='text-bold'/>
          <ProductCard.Buttons className='custom-buttons' />
        </ProductCard>

        <ProductCard product={ product } className='bg-dark text-white'>
          <ProductImage className='custom-image'/>
          <ProductTitle className='text-bold'/>
          <ProductButtons className='custom-buttons'/>
        </ProductCard>

        <ProductCard product={ product }>
          <ProductImage />
          <ProductTitle />
          <ProductButtons />
        </ProductCard>
      </div>
    </div>
  )
}
