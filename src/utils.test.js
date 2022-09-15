const data = require("../data.json");
const { checkStockQuantities, updateData } = require("./utils");

describe("checkStockQuantities", () => {
    const { orders, products } = data;

    test('The inventory should have enough stocks for the first order', () => {
        const firstOrder = orders[0];
        const result = checkStockQuantities(firstOrder, products);
        expect(result).toEqual(true);
    });
    
    test('The inventory should not have enough stocks for the second order', () => {
        const secondOrder = orders[1];
        const result = checkStockQuantities(secondOrder, products);
        expect(result).toEqual(false);
    });
});

describe("updateData", () => {
    let clonedData, orders, products
    beforeEach(() => {
        clonedData = JSON.parse(JSON.stringify(data));
        ({ orders, products } = clonedData);
    });

    test('It should update the status of a fulfilled order and quantities of inventory', () => {
        const firstOrder = orders[0];
        const canBeFulfilled = checkStockQuantities(firstOrder, products);
        updateData(canBeFulfilled, firstOrder, products);
        const [firstProduct, secondProduct] = products;
    
        expect(firstOrder.status).toEqual('Fulfilled');
        expect(firstProduct.quantityOnHand).toEqual(46);
        expect(secondProduct.quantityOnHand).toEqual(3);
    });
    
    test('It should update the status of a unfulfilled order', () => {
        const secondOrder = orders[1];
        const canBeFulfilled = checkStockQuantities(secondOrder, products);
        updateData(canBeFulfilled, secondOrder, products);
        const [firstProduct, secondProduct] = products;
    
        expect(secondOrder.status).toEqual('Unfulfillable');
        expect(firstProduct.quantityOnHand).toEqual(50);
        expect(secondProduct.quantityOnHand).toEqual(10);    
    });
});