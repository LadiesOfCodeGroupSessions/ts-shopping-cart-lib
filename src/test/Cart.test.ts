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

  it('multiple items without special', () => {
    const cart = new Cart()
    const banana = new Item('Banana', 30, 2)

    cart.addItem(banana)

    const answer = cart.getTotal()

    expect(answer).toBe(45)
  })

  it('multiple specials', () => {
    const cart = new Cart()
    const banana = new Item('Banana', 30, 2)
    const apple = new Item('Apple', 50, 3)

    cart.addItem(banana)
    cart.addItem(apple)

    const answer = cart.getTotal()

    expect(answer).toBe(175)
  })


  it('one special', () => {
    const cart = new Cart()
    const apple = new Item('Apple', 50, 3)

    cart.addItem(apple)

    const answer = cart.getTotal()

    expect(answer).toBe(130)
  })

  it('one special and one non-special', () => {
    const cart = new Cart()
    const apple = new Item('Apple', 50, 4)

    cart.addItem(apple)

    const answer = cart.getTotal()

    expect(answer).toBe(180)
  })

  it('multiple specials and multiple non-specials', () => {
    const cart = new Cart()
    const banana = new Item('Banana', 30, 11)
    const apple = new Item('Apple', 50, 10)

    cart.addItem(banana)
    cart.addItem(apple)

    const answer = cart.getTotal()

    expect(answer).toBe(695)
  })

})
