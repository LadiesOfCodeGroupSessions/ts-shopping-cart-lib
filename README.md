http://codekata.com/kata/kata09-back-to-the-checkout/

Testing Scenario
- Figure out how to reset state on server correctly

To run the tests:
```
npm test
```

To run linting:
```
npm run lint
```

To run the server:
```
npm start
```

To build locally:
```
npm run build
```

TODO:
- api - get list of items, every time you add an item you hit the server, eventually buy / abandon
- build up to asynchronous purchasing of same item scenario
- users


Future Scenarios:
- Holds stock while item in basket. Expiry?

## API Endpoints
### /items

`GET` `/items`
- Returns an array with all items in stock
```
[
  {
    'name': 'apple',
    'price': 15,
    'quantity': 10
  },
  {
    'name': 'banana',
    'price': 12,
    'quantity': 5
  }
]
```
_______
### /items/:item_name

`GET` `items/:item_name`
- Returns single item
```
[
  {
    'name': 'apple',
    'price': 15,
    'quantity': 10
  }
]
```
- Question: should we add an `item_id`?

`POST` `items/:item_name`
- Adds an item to the stock

`DELETE` `items/:item_name`
- Removes an item from the stock

`PUT` `items/:item_name`
- Updates the item, eg: to update the stock of an item
_______
### /orders

`GET` `/orders`
- Gets all orders
```
[
  {
    'id': '9085369183',
    'name': 'Ash',
    'address': '42 Wallaby Way',
    'phone': '07402920174',
    'cart': [
      {
        'name': 'apple',
        'price': 15,
        'quantity': 2
      },
      {
        'name': 'carrot',
        'price': 8,
        'quantity': 5
      }
    ]
  },
  {
    'id': '1234567',
    'name': 'Jo',
    'address': '22 Jump Street',
    'phone': '07413093762',
    'cart': [
      {
        'name': 'banana',
        'price': 12,
        'quantity': 2
      }
    ]
  }
]
```

`GET` `/orders/:order_id`
- Gets a single order
```
[
  {
    'id': '9085369183',
    'name': 'Bob',
    'address': '42 Wallaby Way',
    'phone': '07402920174',
    'cart': [
      {
        'name': 'apple',
        'price': 15,
        'quantity': 2
      },
      {
        'name': 'carrot',
        'price': 8,
        'quantity': 5
      }
    ]
  }
]
```

`DELETE` `/orders/:order_id`
- Deletes an order

`PUT` `/orders/:order_id`
- Adds an item to the order

```
Request body
 {
    'id': 3,
    'items': [
      {
        'name': 'apple',
        'quantity': 3
        }
      ]
  }
```
