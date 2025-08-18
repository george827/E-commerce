import React from 'react'
import './AddProduct.css'
import upload_area from '../../assets/Admin_Assets/upload_area.svg'


export const AddProduct = () => {
    const [image, setImage] = React.useState(false);
    const [productData, setProductData] = React.useState({
        name: '',
        old_price: '',
        new_price: '',
        category: '',
        image: ''
    });
    const imageHandler = (event) => {
        const file = event.target.files[0];
        if (file) {
            setImage(URL.createObjectURL(file));
        }
    };
    const handleChange = (event) => {
        const { name, value } = event.target;
        setProductData({
            ...productData,
            [name]: value
        });
    };

    const Add_product = async () => {
        console.log(productData);
        const response = await fetch('http://localhost:5000/api/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productData)
        });
        const data = await response.json();
        console.log(data);
    };
  return (
    <div className="add-product">
      <div className="addproduct-itemfield">
        <p>Product Title</p>
        <input value={productData.name} type="text" name="name" placeholder='Type here' id="" onChange={handleChange} />
      </div>
      <div className="addproduct-price">
        <div className="addproduct-itemfield">
        <p>Product Price</p>
        <input value={productData.old_price} type="text" name="old_price" placeholder='Type here' id="" onChange={handleChange} />
        </div>
        <div className="addproduct-itemfield">
        <p>Offer Price</p>
        <input value={productData.new_price} type="text" name="new_price" placeholder='Type here' id="" onChange={handleChange} />
        </div>
      </div>
      <div className="addproduct-itemfield">
        <p>Product Category</p>
        <select value={productData.category} name="category" id="" className="add-product-selector" onChange={handleChange}>
          <option value="Women">women</option>
          <option value="Men">men</option>
          <option value="Kid">kids</option>
        </select>
      </div>
      <div className="addproduct-itemfield">
        <label htmlFor="file-input">
            <img src={image?image:upload_area} alt="Upload Area" className='addproduct-thumbnail-img'/>
        </label>
        <input type="file" onChange={imageHandler} name="image" id="file-input" hidden />
      </div>
      <button onClick={Add_product} className='addproduct-btn'>Add Product</button>
    </div>
  )
}
