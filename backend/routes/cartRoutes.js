const express = require("express");
const router = express.Router();
const fetchUser = require("../middleware/authMiddleware");
const { addToCart, removeFromCart, getCartData } = require("../controllers/cartController");

router.post("/add", fetchUser, addToCart);
router.post("/remove", fetchUser, removeFromCart);
router.get("/data", fetchUser, getCartData);

module.exports = router;
