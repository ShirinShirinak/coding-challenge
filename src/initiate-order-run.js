const { checkStockQuantities, updateData } = require("./utils");
const data = require("../data.json");

class InitiateOrderRun {
    constructor(orderIds) {
      this.orderIds = orderIds;
    }

    fulfillOrders() {
        const { orders, products } = data;

        // Getting the order objects from the data.json file based on the order IDs given as an input
        const filteredData = orders.filter((data) => this.orderIds.includes(data.orderId));

        // List of unfulfilled orders
        const unfulfilledOrders = filteredData.filter((order) => {
            // Checking to see if there is enough in stock to fulfill the order
            const canBeFulfilled = checkStockQuantities(order, products);

            // Update the stock quantity and the status of the order
            updateData(canBeFulfilled, order, products);
        
            return !canBeFulfilled;
        });

        // Only return the order IDs of the unfulfilled orders
        return unfulfilledOrders.map((order) => order.orderId);
    }
}

module.exports = InitiateOrderRun;