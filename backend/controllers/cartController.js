const User = require("../models/User");

exports.addToCart = async (req, res) => {
  const { itemId } = req.body;
  const user = await User.findById(req.userId);
  if (!user) return res.status(404).json({ success: false, message: "User not found" });

  user.cartData[itemId] = (user.cartData[itemId] || 0) + 1;
  await user.save();
  res.json({ success: true, cartData: user.cartData });
};

exports.removeFromCart = async (req, res) => {
  const { itemId } = req.body;
  const user = await User.findById(req.userId);
  if (!user) return res.status(404).json({ success: false, message: "User not found" });

  if (user.cartData[itemId] > 0) user.cartData[itemId] -= 1;
  await user.save();
  res.json({ success: true, cartData: user.cartData });
};

exports.getCartData = async (req, res) => {
  const user = await User.findById(req.userId);
  if (!user) return res.status(404).json({ success: false, message: "User not found" });

  res.json({ success: true, cartData: user.cartData });
};