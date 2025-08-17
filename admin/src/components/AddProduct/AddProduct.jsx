import React from 'react'
import './AddProduct.css'
import upload_area from '../../assets/Admin_Assets/upload_area.svg'

export const AddProduct = () => {
  return (
    <div className="add-product">
      <div className="addproduct-itemfield">
        <p>Product Title</p>
        <input type="text" name="name" placeholder='Type here' id="" />
      </div>
      <div className="addproduct-price">
        <div className="addproduct-itemfield">
        <p>Product Price</p>
        <input type="text" name="old_price" placeholder='Type here' id="" />
        </div>
        <div className="addproduct-itemfield">
        <p>Offer Price</p>
        <input type="text" name="new_price" placeholder='Type here' id="" />
        </div>
      </div>
      <div className="addproduct-itemfield">
        <p>Product Category</p>
        <select name="category" id="" className="add-product-selector">
          <option value="Women">women</option>
          <option value="Men">men</option>
          <option value="Kid">kids</option>
        </select>
      </div>
      <div className="addproduct-itemfield">
        <label htmlFor="file-input">
            <img src={upload_area} alt="Upload Area" className='addproduct-thumbnail-img'/>
        </label>
      </div>
    </div>
  )
}
