// const productRoutes = require("./routes/productRoutes");
// app.use("/api/products", productRoutes);

// require("dotenv").config();
// const connectDB = require("./config/db");
// connectDB();

// const express = require("express");

// const errorHandler = require("./middleware/errorHandler");
// app.use(errorHandler);

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");

const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");
const cartRoutes = require("./routes/cartRoutes");
const errorHandler = require("./middleware/errorHandler");

const app = express();
const PORT = process.env.PORT || 4000;

// Connect to DB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "upload", "images")));

// Multer setup for image uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "upload/images"),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`),
});
const upload = multer({ storage });

// Routes
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/cart", cartRoutes);

// Image upload endpoint
app.post("/api/upload", upload.single("product"), (req, res) => {
  const imagePath = `/images/${req.file.filename}`;
  res.json({ success: true, image: imagePath });
});

// Error handler
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});