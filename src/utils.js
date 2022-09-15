// This function checks to see if the items are in stock
exports.checkStockQuantities = (order, products) => {
    return order.items.every((item) => {
      const product = products.find((product) => product.productId === item.productId);
      return product.quantityOnHand >= item.quantity;
    });
  };

// This function updates the quantityOnHand of products and the status of the order depending on whether the order can be fulfilled or not
exports.updateData = (canBeFulfilled, order, products) => {
    if (canBeFulfilled) {
      order.items.forEach((item) => {
        const product = products.find((product) => product.productId === item.productId);
        product.quantityOnHand -= item.quantity;
      });
      order.status = "Fulfilled";
    } else {
      // If the order cannot be fulfilled, then the status is updated
      order.status = "Unfulfillable";
    }
  };

function generateNewPurchaseOrder() {}
