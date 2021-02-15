import {Cart} from '../main/Cart'
import {Item} from '../main/Item'
import { StockManager } from '../main/StockManager'
import {Till} from '../main/Till'

describe('Till', () => {
    // {name: string, quantity: number}[]
    const stockList = [
        {name: 'Apple', quantity: 100},
        {name: 'Banana', quantity: 100},
        {name: 'Carrot', quantity: 100}
        ]

    const stockManager = new StockManager(stockList)
    const till = new Till(stockManager)

    it('get total for one apple', () => {
        const cart = new Cart()
        const item = new Item('Apple', 50, 1)

        cart.addItem(item)

        const total = till.getTotal(cart)
        expect(total).toBe(50)
    })

    it('multiple items without special', () => {
        const cart = new Cart()
        const banana = new Item('Banana', 30, 2)

        cart.addItem(banana)

        const answer = till.getTotal(cart)

        expect(answer).toBe(45)
    })

    it('multiple specials', () => {
        const cart = new Cart()
        const banana = new Item('Banana', 30, 2)
        const apple = new Item('Apple', 50, 3)

        cart.addItem(banana)
        cart.addItem(apple)

        const answer = till.getTotal(cart)

        expect(answer).toBe(175)
    })

    it('one special', () => {
        const cart = new Cart()
        const apple = new Item('Apple', 50, 3)

        cart.addItem(apple)

        const answer = till.getTotal(cart)

        expect(answer).toBe(130)
    })

    it('one special and one non-special', () => {
        const cart = new Cart()
        const apple = new Item('Apple', 50, 4)

        cart.addItem(apple)

        const answer = till.getTotal(cart)

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

        const answer = till.getTotal(cart)

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

    it('gives as much stock as there is when not enough stock', () => {
        const cart = new Cart()
        const stockList = [{name: 'Apple', quantity: 5}]
        const stockManager = new StockManager(stockList)
        const till = new Till(stockManager)

        const apples = new Item('Apple', 50, 6)
        cart.addItem(apples)

        expect(till.getTotal(cart)).toBe(230)
        expect(stockManager.getStockOfItem('Apple')).toBe(0)
    })

    it('no stock', () => {
        const cart = new Cart()
        const stockList = [{name: 'Apple', quantity: 0}]
        const stockManager = new StockManager(stockList)
        const till = new Till(stockManager)

        const apples = new Item('Apple', 50, 4)
        cart.addItem(apples)

        expect(till.getTotal(cart)).toBe(0)
        expect(stockManager.getStockOfItem('Apple')).toBe(0)
    })
})
