const express = require('express');
const router = express.Router();

const product = require('./controllers/products.controller');

router.get('/', (req, res) => res.send('The app is up and running!'));

router.get('/api/products', product.all_products);

router.get('/api/product/:id', product.product_by_id);

module.exports = router