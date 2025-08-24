const express = require("express");
const router = express.Router();
const { addProduct, removeProduct, getAllProducts } = require("../controllers/productController");

router.post("/add", addProduct);
router.post("/remove", removeProduct);
router.get("/all", getAllProducts);

// 🆕 New Collections
router.get("/newcollections", async (req, res) => {
  try {
    const products = await Product.find({});
    const newCollections = products.slice(-8);
    res.json(newCollections);
  } catch (err) {
    console.error("Error fetching new collections:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// 🆕 Popular in Women Category
router.get("/popularwomen", async (req, res) => {
  try {
    const products = await Product.find({ category: "women" });
    const popularProducts = products.slice(-4);
    res.json(popularProducts);
  } catch (err) {
    console.error("Error fetching popular women products:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});



module.exports = router;

