const { checkStockQuantities, updateData, generateNewPurchaseOrder } = require("./utils");
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

        /* If the quantityOnHand is less than reorderThreshold then a new purchase order is generated. 
        Assumptions: 
        The code for new purchase order already exists.
        This is ran only once, every time the order run is initiated so that the new purchase order is not generated multiple times. Alternatively,
        a re-order flag can be added */
        products.forEach((product) => {
            if (product.quantityOnHand < product.reorderThreshold) {
            generateNewPurchaseOrder(product.productId);
            }
        });

        // Only return the order IDs of the unfulfilled orders
        return unfulfilledOrders.map((order) => order.orderId);
    }
}

module.exports = InitiateOrderRun;