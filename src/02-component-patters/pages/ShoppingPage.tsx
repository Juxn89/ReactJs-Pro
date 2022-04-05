import React from 'react'
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components'

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
        <ProductCard product={ product }>
          <ProductCard.Image />
          <ProductCard.Title title={ 'My Coffee' }/>
          <ProductCard.Buttons />
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
