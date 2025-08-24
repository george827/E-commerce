const User = require("../models/User");
const jwt = require("jsonwebtoken");

exports.signup = async (req, res) => {
  const { name, email, password } = req.body;
  const existingUser = await User.findOne({ email });
  if (existingUser) return res.status(400).json({ success: false, message: "User already exists" });

  const cartData = Object.fromEntries([...Array(300).keys()].map(i => [i, 0]));
  const user = new User({ name, email, password, cartData });
  await user.save();

  const token = jwt.sign({ user: { id: user.id } }, process.env.JWT_SECRET);
  res.json({ success: true, message: "Signup successful", token });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || user.password !== password) {
    return res.status(400).json({ success: false, message: "Invalid credentials" });
  }

  const token = jwt.sign({ user: { id: user.id } }, process.env.JWT_SECRET);
  res.json({ success: true, message: "Login successful", token });
};

