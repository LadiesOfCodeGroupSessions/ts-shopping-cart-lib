import {Cart} from '../main/Cart'
import {Item} from '../main/Item'
import { StockManager } from '../main/StockManager'
import {Till} from '../main/Till'

describe('Till', () => {
    // {name: string, quantity: number}[]
    const stockList = [
        {name: 'Apple', quantity: 100}
        ]

    const stockManager = new StockManager(stockList)
    const till = new Till(stockManager);

    it('get total for one apple', () => {
        const cart = new Cart()
        const item = new Item('Apple', 50, 1)

        cart.addItem(item)

        const total = till.getTotal(cart)
        expect(total).toBe(50)
    })

    it.skip('multiple items without special', () => {
        const cart = new Cart()
        const banana = new Item('Banana', 30, 2)

        cart.addItem(banana)

        const answer = cart.getTotal()

        expect(answer).toBe(45)
      })

    it.skip('multiple specials', () => {
    const cart = new Cart()
    const banana = new Item('Banana', 30, 2)
    const apple = new Item('Apple', 50, 3)

    cart.addItem(banana)
    cart.addItem(apple)

    const answer = cart.getTotal()

    expect(answer).toBe(175)
    })

    it.skip('one special', () => {
        const cart = new Cart()
        const apple = new Item('Apple', 50, 3)

        cart.addItem(apple)

        const answer = cart.getTotal()

        expect(answer).toBe(130)
    })

    it.skip('one special and one non-special', () => {
        const cart = new Cart()
        const apple = new Item('Apple', 50, 4)

        cart.addItem(apple)

        const answer = cart.getTotal()

        expect(answer).toBe(180)
    })

    it.skip('multiple specials and multiple non-specials', () => {
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

    it('reduces stock after purchase', () => {
        const cart = new Cart()
        const stockList = [{name: 'Apple', quantity: 5}]
        const stockManager = new StockManager(stockList)
        const till = new Till(stockManager)

        const apples = new Item('Apple', 50, 2)
        cart.addItem(apples)

        expect(till.getTotal(cart)).toBe(100)
        expect(stockManager.getStockOfItem('Apple')).toBe(3)
    })

    // test for item not enough stock

    it('reduces stock after purchase', () => {
        const cart = new Cart()
        const stockList = [{name: 'Apple', quantity: 5}]
        const stockManager = new StockManager(stockList)
        const till = new Till(stockManager)

        const apples = new Item('Apple', 50, 6)
        cart.addItem(apples)

        expect(till.getTotal(cart)).toBe(230)
        expect(stockManager.getStockOfItem('Apple')).toBe(0)
    })
})
