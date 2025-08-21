const port = 4000;

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const jwt = require("jsonwebtoken");
const multer = require("multer");
const cors = require("cors");
const path = require("path");
const fs = require("fs");

app.use(express.json());
app.use(cors());

// Database Connection with MongoDb
mongoose.connect(
  "mongodb+srv://kinyanjuigeorge827:qkArCOEoGLZRzWc5@cluster0.pxjtsqg.mongodb.net/e-commerce"
);

// API creation

app.get("/", (req, res) => {
  res.send("Express app is running");
});

// image storage engine
const storage = multer.diskStorage({
  destination: "upload/images",
  filename: (req, file, cb) => {
    cb(
      null,
      `${file.fieldname}_${Date.now()}_${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage: storage });

// creating upload endpoint for images

app.use("/images", express.static("upload/images"));

app.post("/upload", upload.single("product"), (req, res) => {
  res.json({
    success: 1,
    image_url: `http://localhost:${port}/images/${req.file.filename}`,
  });
});

// schema for creating product
const Product = mongoose.model("Product", {
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  new_price: {
    type: Number,
    required: true,
  },
  old_price: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  available: {
    type: Boolean,
    default: true,
  },
});

app.post("/addproduct", async (req, res) => {
  let products = await Product.find({});
  let id;
  if (products.length > 0) {
    // let last_product_array = products[products.length - 1];
    let last_product_array = products.slice(-1);
    let last_product = last_product_array[0];
    id = last_product.id + 1;
  } else {
    id = 1;
  }
  const { name, image, category, new_price, old_price } = req.body;

  const product = new Product({
    id,
    name,
    image,
    category,
    new_price,
    old_price,
  });

  console.log("Product data:", product);
  await product.save();
  console.log("Product added successfully");
  res.json({
    success: true,
    name: req.body.name,
    message: "Product added successfully",
  });
});

// Creating Api for deleting products
// app.post("/removeproduct", async (req, res) => {
//   const { id, name } = req.body;
//   await Product.findOneAndDelete({ id });
//   res.json({ success: true, message: "Product removed successfully", name });
//   console.log("Product removed successfully");
// });


//  want to remove product and also delete image in upload/images

app.post("/removeproduct", async (req, res) => {
  const { id } = req.body;

  try {
    // Find the product first
    const product = await Product.findOne({ id });

    if (!product) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }

    // Extract image filename from product (assuming it's stored as a URL)
    const imageUrl = product.image;
    const filename = imageUrl.split("/").pop(); // Get the filename from the URL

    // Delete the image file
    const imagePath = path.join(__dirname, "upload", "images", filename);
    fs.unlink(imagePath, (err) => {
      if (err) {
        console.error("Error deleting image:", err);
        // You can choose to continue or halt here depending on your needs
      } else {
        console.log("Image deleted successfully");
      }
    });

    // Delete the product from DB
    await Product.findOneAndDelete({ id });

    res.json({ success: true, message: "Product removed successfully", name: product.name });
  } catch (error) {
    console.error("Error removing product:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// create api for getting all products
app.get("/allproducts", async (req, res) => {
  const products = await Product.find({});
  console.log("All products retrieved successfully");
  res.json({ products });
});

app.listen(port, (err) => {
  if (!err) {
    console.log(`Server is running http://localhost:${port}`);
  } else {
    console.error(`Error starting server: ${err}`);
  }
});
