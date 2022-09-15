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

