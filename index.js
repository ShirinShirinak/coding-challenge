const InitiateOrderRun = require("./src/initiate-order-run");

const processOrders = (orderIds) => {
    const orderRun = new InitiateOrderRun(orderIds);
    return orderRun.fulfillOrders();
};

const orderIds = [1122, 1123, 1124, 1125];
console.log("Unfulfilled Order IDs: ", processOrders(orderIds));