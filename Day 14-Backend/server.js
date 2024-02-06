const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Product = require('./models/product');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log(" MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })

app.use(express.json()); 

// =======CREATE - Add a new product===========
app.post('/products', async (req, res) => {
    try {
        const { name, price, category } = req.body;
        const newProduct = new Product({ name, price, category });
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// =====get product======
app.get('/products', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// =========Get by ID ==============
app.get('/products/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) throw new Error('Product not found');
        res.json(product);
    } catch (err) {
        res.status(404).json({ error: err.message });
    }
});

// ===========update=============
app.put('/products/:id', async (req, res) => {
    try {
        const { name, price, category } = req.body;
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, { name, price, category }, { new: true });
        if (!updatedProduct) throw new Error('Product not found');
        res.json(updatedProduct);
    } catch (err) {
        res.status(404).json({ error: err.message });
    }
});

//=================Delete==============
app.delete('/products/:id', async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
        if (!deletedProduct) throw new Error('Product not found');
        res.json({ message: 'Product deleted successfully' });
    } catch (err) {
        res.status(404).json({ error: err.message });
    }
});

app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>');
});

app.listen(3000, () => {
    console.log("APP IS LISTENING ON PORT 3000!");
});
