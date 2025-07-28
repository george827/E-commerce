import React, {useContext} from 'react'
import { ShopContext } from '../context/ShopContext';
import { useParams } from 'react-router-dom';

export const Product = () => {
  const {all_products} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_products.find(item => item.id === parseInt(productId));
  return (
    <div>
      
    </div>
  )
}

