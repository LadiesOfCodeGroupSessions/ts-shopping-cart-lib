import { StockManager } from '../main/StockManager'
import { Cart } from '../main/Cart'
import { Item } from '../main/Item'

describe('Stock Manager', () => {
  it('an item is out of stock', () => {
    const cart = new Cart()
    const StockManager = new StockManager()
    const apple = new Item('Apple', 50, 2)

    cart.addItem(apple)

    const answer = cart.getTotal()

    expect(answer).toBe(100)
  })
})