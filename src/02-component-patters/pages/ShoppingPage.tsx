import React from 'react'
import { ProductCard } from '../components/ProductCard'

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
        <ProductCard product={ product }/>
      </div>
    </div>
  )
}
