const Order = require('../models/order');

const createOrder = async (req, res) => {
    try {
        const { products } = req.body;
        const totalAmount = products.reduce((sum, p) => sum + p.price * p.quantity, 0);
        const newOrder = new Order({ user: req.user.id, products, totalAmount });
        await newOrder.save();
        res.status(201).json({ message: "Order created successfully", order: newOrder });
    } catch (error) {
        res.status(500).json({ message: "Error creating order", error });
    }
};

const getUserOrders = async (req, res) => {
    try {
        const orders = await Order.find({ user: req.user.id }).populate('user', 'username email');
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: "Error fetching orders", error });
    }
};

module.exports = { createOrder, getUserOrders };