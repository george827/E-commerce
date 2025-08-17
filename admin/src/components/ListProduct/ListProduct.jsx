import React from 'react'
import './ListProduct.css'

export const ListProduct = () => {
  return (
    <div className="list-product">
      <h2>Product List</h2>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Map through your product data and display rows here */}
        </tbody>
      </table>
    </div>
  )
}
