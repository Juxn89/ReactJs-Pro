import { useState } from 'react';
import { Product, ProductInCart } from "../interfaces/interfaces";

export const useShoppingCart = () => {
  const [shoppingCart, setshoppingCart] = useState<{ [key: string]: ProductInCart }>({});

  const onProdcutCountChange = ({count, product}: { count: number, product: Product }) => {
    // console.log('onProductCountChange', product);

    setshoppingCart( oldShoppingCart => {
      const productInCart:ProductInCart = oldShoppingCart[product.id] || {...product, count: 0};

      if(Math.max(productInCart.count + count, 0) > 0) {
        productInCart.count += count;
        return {
          ...oldShoppingCart,
          [product.id]: productInCart
        }
      }

      // Remove item from shopping cart
      const { [product.id]: toDelete, ...rest } = oldShoppingCart;
      return rest;

      // if(count === 0) {
      //   // delete ({...oldShoppingCart})[product.id];
      //   const { [product.id]: toDelete, ...rest } = oldShoppingCart;
      //   return rest;
      // }

      // return {
      //   ...oldShoppingCart,
      //   [product.id]: { ...product, count }
      // }
     } );
  }

  return {
    shoppingCart,
    onProdcutCountChange
  }
}