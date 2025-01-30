const fs = require('fs');
const path = require('path');

class OrderService {
    constructor() {
        this.filePath = path.join(__dirname, '../data/orders.json');
        this.minOrderThreshold = 500;
    }

    // Get all orders
    getOrders() {
        const data = fs.readFileSync(this.filePath, 'utf-8');
        return JSON.parse(data);
    }

    // Place an order
    placeOrder(order) {
        const orders = this.getOrders();
        order.orderId = orders.length + 1;

        // Check if min threshold is meet
        const totalPrice = order.products.reduce((sum, p) => sum + p.price, 0);
        if (totalPrice < this.minOrderThreshold) {
            throw new Error(`Order must be at least $${this.minOrderThreshold}`);
        }

        order.totalPrice = totalPrice;
        orders.push(order);
        fs.writeFileSync(this.filePath, JSON.stringify(orders, null, 2));
        return order;
    }
}

module.exports = new OrderService();