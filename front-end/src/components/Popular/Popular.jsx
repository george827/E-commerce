import React from 'react'
import './Popular.css'
import data_product from '../assets/Frontend_Assets/data'
import Item from '../Item/Item'

export const Popular = () => {
  return (
    <div className='popular'>
      <h1>Popular in women</h1>
      <hr />
      <div className="popular-item">
        {data_product.map((item, i) => (
          <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        ))}
      </div>
    </div>
  )
}
