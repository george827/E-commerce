const port = 4000;

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const jwt = require('jsonwebtoken');
const multer = require('multer');
const cors = require('cors');
const path = require('path');

app.use(express.json());
app.use(cors());

// Database Connection with MongoDb
mongoose.connect("mongodb+srv://kinyanjuigeorge827:qkArCOEoGLZRzWc5@cluster0.pxjtsqg.mongodb.net/e-commerce")

// API creation

app.get("/", (req, res) => {
    res.send("Express app is running");
});

// image storage engine
const storage = multer.diskStorage({
    destination: 'uploads/images',
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}_${Date.now()}_${path.extname(file.originalname)}`);
    }
});

//  ignore

const upload = multer({ storage: storage });

// creating upload endpoint for images

app.use('/images', express.static('uploads/images'));

app.post('/upload', upload.single('product'), (req, res) => {
    res.json({
        success: 1,
        image_url: `http://localhost:${port}/images/${req.file.filename}`
    });
});

app.listen(port, (err) => {
    if (!err){
        console.log(`Server is running http://localhost:${port}`);
    } else {
        console.error(`Error starting server: ${err}`);
    }
})