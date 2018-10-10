const express = require('express');
const router = express.Router();

const product = require('./controllers/products.controller');
const order = require('./controllers/orders.controller');
const user = require('./controllers/users.controller');

router.get('/', (req, res) => res.send('The app is up and running!'));

router.get('/api/products', product.all_products);

router.get('/api/product/:id', product.product_by_id);

router.get('/api/orders/', order.all_orders);

router.get('/api/order/:orderid', order.cart_items);

router.post('/api/order/', order.place_orders);

router.post('/api/user/', user.user_by_username);

module.exports = router