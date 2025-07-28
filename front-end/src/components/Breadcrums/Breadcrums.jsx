import React from 'react'
import './Breadcrums.css'
import arrow_icon from '../assets/Frontend_Assets/arrow_icon.png'
import { Product } from '../../pages/Product';

export const Breadcrums = (props) => {
    const {product} = props;
  return (
    <div className='breadcrum'>

        HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" /> {Product.category} <img src={arrow_icon} alt="" /> {product.name}
    </div>
  )
}
