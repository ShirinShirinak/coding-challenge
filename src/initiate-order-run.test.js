const InitiateOrderRun = require("./initiate-order-run");

test("Fulfil orders", () => {
    const orderRun = new InitiateOrderRun([1122, 1123, 1124, 1125]);
    const result = orderRun.fulfillOrders();
    expect(result).toEqual([1123, 1125]);
});
