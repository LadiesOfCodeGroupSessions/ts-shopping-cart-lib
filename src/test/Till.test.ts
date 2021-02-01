import {Cart} from '../main/Cart'
import {Item} from '../main/Item'
import {Till} from '../main/Till'

describe('Till', () => {
    const till = new Till();

    it('get total for one apple', () => {
        const cart = new Cart();
        const item = new Item('Apple', 50, 1)

        cart.addItem(item)

        const total = till.getTotal(cart);

        expect(total).toBe(50);
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
    const carrot = new Item('Carrot', 20, 1)

    cart.addItem(banana)
    cart.addItem(apple)
    cart.addItem(carrot)

    const answer = cart.getTotal()

    expect(answer).toBe(715)
    })
})
