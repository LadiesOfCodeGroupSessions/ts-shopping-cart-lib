import { Cart } from '../main/Cart'
import { Item } from '../main/Item'

describe('Cart', () => {

  it('returns stored items', () => {
    const cart = new Cart()
    const apple = new Item('Apple', 50, 1)
    const banana  = new Item('Banana', 45, 1)

    cart.addItem(apple)
    cart.addItem(banana)

    const answer = cart.getItems()

    expect(answer).toEqual([ apple, banana ])
  })
})
