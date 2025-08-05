import React from 'react'
import './DescriptionBox.css'

export const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className='descriptionbox-navigator'>
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum 
                quidem quaerat magni quia deleniti a tempora dicta tempore, incidunt 
                excepturi exercitationem perferendis veritatis unde fugit necessitatibus,
                 voluptate similique 
            </p>
        </div>
    </div>
  )
}
