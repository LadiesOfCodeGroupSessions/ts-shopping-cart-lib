import {Cart} from '../main/Cart'
import {Item} from '../main/Item'

describe('Cart', () => {
    it('get total for one apple', () => {
        // Arrange
        const cart = new Cart()
        const item = new Item('Apple', 50)

        cart.addItem(item, 1)

        // Act
        const answer = cart.getTotal()

        // Assert
        expect(answer).toBe(50)
    })
})
