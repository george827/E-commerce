import React, {useState, useEffect} from 'react'
import './ListProduct.css'
import cross_icon from "../../assets/Admin_Assets/cross_icon.png"

export const ListProduct = () => {
  const [products, setProducts] = useState([]);

  const fetchinfo = async () => {
    await fetch('http://localhost:4000/allproducts')
      .then((response) => response.json())
      .then((data) => {
        console.log('Fetched products:', data);
        if (Array.isArray(data.products)) {
          setProducts(data.products);
        } else {
          setProducts([]);
        }
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
        setProducts([]);
      });
  };
  useEffect(() => {
    fetchinfo();
  }, []);

  const removeProduct = async (id, name) => {
  try {
    const response = await fetch("http://localhost:4000/removeproduct", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ id, name }) // Send both id and name if required
    });

    const data = await response.json();

    if (data.success) {
      alert(data.message);
      fetchinfo(); // Refresh your product list or UI
    } else {
      alert("Error removing product");
    }
  } catch (error) {
    console.error("Request failed:", error);
    alert("Something went wrong while removing the product");
  }
};


  return (
    <div className="list-product">
      <h1>All Products list</h1>
      <div className="listproduct-format-main">
        <p>Products</p>
        <p>Ttitle</p>
        <p>Old Price</p>
        <p>New price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className="listproduct-allproducts">
        <hr />
        {Array.isArray(products) && products.length > 0 ? (
          products.map((product, index) => {
            return (
              <div key={index} className="listproduct-format-main listproduct-format">
                <img src={product.image} alt={product.name} className='listproduct-product-icon'/>
                <p>{product.name}</p>
                <p>{product.old_price}</p>
                <p>{product.new_price}</p>
                <p>{product.category}</p>
                <img src={cross_icon} alt="Remove" className='listproduct-remove-icon' onClick={() => removeProduct(product.id, product.name)} />
              </div>
            );
          })
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  )
}
