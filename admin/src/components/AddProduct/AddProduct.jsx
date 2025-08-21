import React, {useState} from 'react'
import './AddProduct.css'
import upload_area from '../../assets/Admin_Assets/upload_area.svg'


export const AddProduct = () => {
    const [image, setImage] = useState(false);
    const [preview, setPreview] = useState(null);


    const [productData, setProductData] = useState({
        name: '',
        old_price: '',
        new_price: '',
        category: 'women',
        image: ''
    });
    const imageHandler = (event) => {
  const file = event.target.files[0];
  if (file) {
    setImage(file); // for upload
    setPreview(URL.createObjectURL(file)); // for preview
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
        let responseData;
        let product = productData;

        let formData = new FormData();
        formData.append('product', image);

        await fetch('http://localhost:4000/upload', {
            method: 'POST',
            headers: {
              Accept: 'application/json'
            },
            body: formData
        }).then((response) => response.json()).then((data) => {
            responseData = data;
        })
        if (responseData.success) {
            // Handle successful upload
            product.image = responseData.image_url;
            console.log(product);

            await fetch('http://localhost:4000/addproduct', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(product)
            }).then((response) => response.json()).then((data) => {
                data.success? alert("Product added"): alert("Error adding product");
            });
        }
    }
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
            <img src={preview ? preview : upload_area} alt="Upload Area" className='addproduct-thumbnail-img'/>
        </label>
        <input type="file" onChange={imageHandler} name="image" id="file-input" hidden />
      </div>
      <button onClick={Add_product} className='addproduct-btn'>Add Product</button>
    </div>
  )
}
