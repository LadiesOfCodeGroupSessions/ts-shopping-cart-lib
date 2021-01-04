import {Cart} from '../main/Cart'
import {Item} from '../main/Item'

describe('Cart', () => {
    it('get total for one apple', () => {
        // Arrange
        const cart = new Cart()
        const item = new Item('Apple', 50, 1)

        cart.addItem(item, 1)

        // Act
        const answer = cart.getTotal()

        // Assert
        expect(answer).toBe(50)
    })

    it('get total for two apples', () => {
        const cart = new Cart()
        const apple = new Item('Apple', 50, 2)

        cart.addItem(apple, 1)

        const answer = cart.getTotal()

        expect(answer).toBe(100)
    })

    it('get discounted price for 3 apples', () => {
        const cart = new Cart()
        const apple = new Item('Apple', 50, 3)

        cart.addItem(apple, 1)

        const answer = cart.getTotal()

        expect(answer).toBe(130)
    })
})
