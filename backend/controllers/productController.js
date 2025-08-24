const Product = require("../models/Product");
const fs = require("fs");
const path = require("path");

exports.addProduct = async (req, res) => {
  const products = await Product.find({});
  const id = products.length ? products[products.length - 1].id + 1 : 1;
  const { name, image, category, new_price, old_price } = req.body;

  const product = new Product({ id, name, image, category, new_price, old_price });
  await product.save();

  res.json({ success: true, message: "Product added successfully", name });
};

exports.removeProduct = async (req, res) => {
  const { id } = req.body;
  const product = await Product.findOne({ id });
  if (!product) return res.status(404).json({ success: false, message: "Product not found" });

  const filename = product.image.split("/").pop();
  const imagePath = path.join(__dirname, "..", "upload", "images", filename);
  fs.unlink(imagePath, (err) => {
    if (err) console.error("Image deletion error:", err);
  });

  await Product.deleteOne({ id });
  res.json({ success: true, message: "Product removed", name: product.name });
};

exports.getAllProducts = async (req, res) => {
  const products = await Product.find({});
  res.json({ products });
};











// const Product = require("../models/Product");
// const fs = require("fs");
// const path = require("path");

// // add product
// exports.addProduct = async (req, res) => {
//     let products = await Product.find({});
//   let id;
//   if (products.length > 0) {
//     // let last_product_array = products[products.length - 1];
//     let last_product_array = products.slice(-1);
//     let last_product = last_product_array[0];
//     id = last_product.id + 1;
//   } else {
//     id = 1;
//   }
//   const { name, image, category, new_price, old_price } = req.body;

//   const product = new Product({
//     id,
//     name,
//     image,
//     category,
//     new_price,
//     old_price,
//   });


//   await product.save();
//   res.json({
//     success: true,
//     name: req.body.name,
//     message: "Product added successfully",
//   });
// };

// // remove product
// exports.removeProduct = async (req, res) => {
//     const { id } = req.body;
//     try {
//     // Find the product first
//     const product = await Product.findOne({ id });

//     if (!product) {
//       return res.status(404).json({ success: false, message: "Product not found" });
//     }

//     // Extract image filename from product (assuming it's stored as a URL)
//     const imageUrl = product.image;
//     const filename = imageUrl.split("/").pop(); // Get the filename from the URL

//     // Delete the image file
//     const imagePath = path.join(__dirname, "upload", "images", filename);
//     fs.unlink(imagePath, (err) => {
//       if (err) {
//         console.error("Error deleting image:", err);
//         // You can choose to continue or halt here depending on your needs
//       } else {
//         console.log("Image deleted successfully");
//       }
//     });
//     // Delete the product from DB
//     await Product.findOneAndDelete({ id });

//     res.json({ success: true, message: "Product removed successfully", name: product.name });
//   } catch (error) {
//     console.error("Error removing product:", error);
//     res.status(500).json({ success: false, message: "Internal server error" });
//   }
// };

// // get all products
// exports.getAllProducts = async (req, res) => {
//     try {
//         const products = await Product.find({});
//         res.json({ success: true, products });
//     } catch (error) {
//         console.error("Error fetching products:", error);
//         res.status(500).json({ success: false, message: "Internal server error" });
//     }
  
// };

