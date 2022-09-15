// This function checks to see if the items are in stock
exports.checkStockQuantities = (order, products) => {
    return order.items.every((item) => {
      const product = products.find((product) => product.productId === item.productId);
      return product.quantityOnHand >= item.quantity;
    });
  };

function updateDate() {}

function generateNewPurchaseOrder() {}
