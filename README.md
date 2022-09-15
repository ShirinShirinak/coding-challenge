# Order Fulfilment
Order Fulfilment is a simple script in Javascript used to initiate an order run, delivering orders according to pending orders and inventory availability. 

---
## System Requirement
Node.js

---
## Install

```
npm install
```

---
## Usage
Run Order Fulfillment in command line: 
```
npm start
```
Output: 
```
Unfulfilled Order IDs:  [ 1123, 1125 ]
```

Run tests:
```
npm test
```
---
## Required Data

- data.json
    - Contains the products and order data, which cannot be changed. 

---
## Functions

### index.js
- processOrders (params: Array of order IDs)
    - Entery point to the system 

### initiate-order-run.js
- fulfillOrders ()
    - Start the order run process

### utils.js
- checkStockQuantities(params: order, products)
    - Check stock availability for order fulfilment
- updateData(params: canBeFulfilled, order, products)
    - Update the order status to either Fulfilled or Unfulfillable
    - Update the stock availability on order fulfilment
- generateNewPurchaseOrder(param: productId)
    - Generate a new purchase order when the stock availability threshold is reached

--- 
## Assumptions 
- The system can be run from the command line, by typing 'npm start'
- A new purchase order is created for every product that falls below the threshold quantity. This function is ran only once after the orders in the current run are processed.
- The fulfilled orders will have their status changed to "Fulfilled" and the ones that cannot be fulfilled are changed to "Unfulfillable".
- It is assumed the code for generateNewPurchaseOrder(productId) already exists, therfore it was not actually implemented in this coding challenge.
- The changes are not persistent between runs, and the data.json file is not modified.
- The address consignment labelling or shipping requirements, and fulfilling partial orders are out of scope for this coding challenge.
- The orders will have a single instance of each product. For example, multiple instances of the same product, with the same product ID cannot be added to the order items. 


---
## Notes
- The data.json does not change. If it is decided to change, a new copy of it will be generated for the testing purposes called test-data.json and have a separate data set for testing purposes. For the purpose of this basic system, the data is not duplicated. 
