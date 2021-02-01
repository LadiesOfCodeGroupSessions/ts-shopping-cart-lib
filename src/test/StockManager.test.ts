// import { Cart } from '../main/Cart'
// import { Item } from '../main/Item'
// import { StockManager } from '../main/StockManager'
//
// describe('Stock Manager', () => {
//   it('an item is out of stock', () => {
//     const stockList = [
//       {name: 'Apple', quantity: 1}
//     ]
//
//     const stockManager = new StockManager(stockList)
//     const cart = new Cart(stockManager)
//
//     const apple = new Item('Apple', 50, 2)
//
//     cart.addItem(apple)
//
//     expect(stockManager.getStockOfItem('Apple')).toBe(1)
//
//     const answer = cart.getTotal()
//
//     expect(answer).toBe(50)
//     expect(stockManager.getStockOfItem('Apple')).toBe(0)
//   })
// })
