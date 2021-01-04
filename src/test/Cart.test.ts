import { Cart } from '../main/Cart'
import { Item } from '../main/Item'

describe('Cart', () => {
  it('get total for one apple', () => {
    // Arrange
    const cart = new Cart()
    const item = new Item('Apple', 50, 1)

    cart.addItem(item)

    // Act
    const answer = cart.getTotal()

    // Assert
    expect(answer).toBe(50)
  })

  it('get total for two apples', () => {
    const cart = new Cart()
    const apple = new Item('Apple', 50, 2)

    cart.addItem(apple)

    const answer = cart.getTotal()

    expect(answer).toBe(100)
  })

  it('get discounted price for 3 apples', () => {
    const cart = new Cart()
    const apple = new Item('Apple', 50, 3)

    cart.addItem(apple)

    const answer = cart.getTotal()

    expect(answer).toBe(130)
  })

  it('gets correct total for 3 apples and 1 banana', () => {
    const cart = new Cart()
    const apple = new Item('Apple', 50, 3)
    const banana = new Item('Banana', 30, 1)

    cart.addItem(apple)
    cart.addItem(banana)

    const answer = cart.getTotal()

    expect(answer).toBe(160)
  })

  it('gets 2 bananas for 45', () => {
    const cart = new Cart()
    const banana = new Item('Banana', 30, 2)

    cart.addItem(banana)

    const answer = cart.getTotal()

    expect(answer).toBe(45)
  })

  it('gets 2 bananas and 3 apples for 175', () => {
    const cart = new Cart()
    const banana = new Item('Banana', 30, 2)
    const apple = new Item('Apples', 50, 3)

    cart.addItem(banana)
    cart.addItem(apple)

    const answer = cart.getTotal()

    expect(answer).toBe(175)
  })
})
