import React, {useContext} from 'react'
import { ShopContext } from '../context/ShopContext';
import { useParams } from 'react-router-dom';
import { Breadcrums } from '../components/Breadcrums/Breadcrums';
import { ProductDisplay } from '../components/ProductDisplay/ProductDisplay';
import { DescriptionBox } from '../components/DescriptionBox/DescriptionBox';
import { RelatedProducts } from '../components/RelatedProducts/RelatedProducts';

export const Product = () => {
  const {all_products} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_products.find(item => item.id === parseInt(productId));
  return (
    <div>
      <Breadcrums product={product} />
      <ProductDisplay product ={product} />
      <DescriptionBox />
      <RelatedProducts />
    </div>
  )
}

