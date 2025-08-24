const path = require("path");
const fs = require("fs");

exports.deleteImage = (imageUrl) => {
  const filename = imageUrl.split("/").pop();
  const imagePath = path.join(__dirname, "..", "upload", "images", filename);
  fs.unlink(imagePath, (err) => {
    if (err) console.error("Error deleting image:", err);
  });
};

