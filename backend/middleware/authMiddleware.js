const jwt = require("jsonwebtoken");

const fetchUser = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ success: false, message: "Unauthorized" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.user.id;
    next();
  } catch (err) {
    console.error("JWT verification failed:", err);
    res.status(401).json({ success: false, message: "Unauthorized" });
  }
};

module.exports = fetchUser;