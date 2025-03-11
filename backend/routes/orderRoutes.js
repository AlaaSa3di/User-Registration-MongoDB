const express = require('express');
const { createOrder, getUserOrders } = require('../controllers/orderController');
const verifyToken = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/create', verifyToken, createOrder);
router.get('/user-orders', verifyToken, getUserOrders);

module.exports = router;