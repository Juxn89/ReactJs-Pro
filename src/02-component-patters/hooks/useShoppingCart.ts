import { useState } from 'react';
import { Product, ProductInCart } from "../interfaces/interfaces";

export const useShoppingCart = () => {
  const [shoppingCart, setshoppingCart] = useState<{ [key: string]: ProductInCart }>({});

  const onProdcutCountChange = ({count, product}: { count: number, product: Product }) => {
    // console.log('onProductCountChange', product);

    setshoppingCart( oldShoppingCart => {

      console.log({count});

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

  return {
    shoppingCart,
    onProdcutCountChange
  }
}