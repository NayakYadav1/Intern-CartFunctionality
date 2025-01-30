const OrderService = require('../services/OrderService');

class orderController {
    // get all order
    getOrders(req, res) {
        try{
            const orders = OrderService.getOrders();
            res.json(orders);
        } catch(error) {
            res.status(500).json({ message: error.message });
        }
    }

    // Place an order
    placeOrder (req, res) {
        try{
            const newOrder = OrderService.placeOrder(req.body);
            res.status(201).json(newOrder);
        } catch(error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = new orderController();