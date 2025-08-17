import React from 'react'
import './SideBar.css'
import { Link } from 'react-router-dom'
import AddProduct_icon from '../../assets/Admin_Assets/Product_Cart.svg'
import ListProduct_icon from '../../assets/Admin_Assets/Product_list_icon.svg'

export const SideBar = () => {
  return (
    <div className="sidebar">
        <Link to={'/addproduct'} style={{ textDecoration: 'none', color: 'black' }}>
        <div className="sidebar-item">
            <img src={AddProduct_icon} alt="addproduct" />
            <p>Add Product</p>
        </div>
        </Link>
        <Link to={'/listproduct'} style={{ textDecoration: 'none', color: 'black' }}>
        <div className="sidebar-item">
            <img src={ListProduct_icon} alt="listproduct" />
            <p>List Product</p>
        </div>
        </Link>
    </div>
  )
}
