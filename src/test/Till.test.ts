import {Cart} from '../main/Cart'
import {Item} from '../main/Item'
import { StockManager } from '../main/StockManager'
import {Till} from '../main/Till'

describe('Till - Specials', () => {
    const stockList = [
        {name: 'Apple', quantity: 100},
        {name: 'Banana', quantity: 100},
        {name: 'Carrot', quantity: 100}
    ]

    const specials  = [
      {name: 'Apple', quantity: 3, price: 130},
      {name: 'Banana', quantity: 2, price: 45}
    ]

    let stockManager
    let till
    let cart

    beforeEach(() => {
        stockManager = new StockManager(stockList)
        till = new Till(stockManager, specials)
        cart = new Cart()
    })

    it('multiple items without special', () => {
        const banana = new Item('Banana', 30, 2)

        cart.addItem(banana)

        expect(till.getTotal(cart)).toBe(45)
    })

    it('multiple specials', () => {
        const banana = new Item('Banana', 30, 2)
        const apple = new Item('Apple', 50, 3)

        cart.addItem(banana)
        cart.addItem(apple)

        expect(till.getTotal(cart)).toBe(175)
    })

    it('multiple specials and multiple non-specials', () => {
        const banana = new Item('Banana', 30, 11)
        const apple = new Item('Apple', 50, 10)
        const carrot = new Item('Carrot', 20, 1)

        cart.addItem(banana)
        cart.addItem(apple)
        cart.addItem(carrot)

        expect(till.getTotal(cart)).toBe(715)
    })
})

describe('Till - Stock', () => {
    const specials  = [
        {name: 'Apple', quantity: 3, price: 130},
        {name: 'Banana', quantity: 2, price: 45}
    ]

    let cart
    let anotherCart

    beforeEach(() => {
        cart = new Cart()
        anotherCart = new Cart()
    })

    it('reduces stock after purchase', () => {
        const stockList = [{name: 'Apple', quantity: 5}]
        const stockManager = new StockManager(stockList)
        const till = new Till(stockManager)

        const apples = new Item('Apple', 50, 2)
        cart.addItem(apples)

        expect(till.getTotal(cart)).toBe(100)
        expect(stockManager.getStockOfItem('Apple')).toBe(3)
    })

    it('reduces stock for multiple carts after purchase', () => {
        const stockList = [{name: 'Apple', quantity: 5}]
        const stockManager = new StockManager(stockList)
        const till = new Till(stockManager)

        const apples = new Item('Apple', 50, 2)
        cart.addItem(apples)
        anotherCart.addItem(apples)

        expect(till.getTotal(cart)).toBe(100)
        expect(till.getTotal(anotherCart)).toBe(100)

        expect(stockManager.getStockOfItem('Apple')).toBe(1)
    })

    it('gives as much stock as there is when not enough stock', () => {
        const stockList = [{name: 'Apple', quantity: 5}]
        const stockManager = new StockManager(stockList)
        const till = new Till(stockManager, specials)

        const apples = new Item('Apple', 50, 6)
        cart.addItem(apples)

        expect(till.getTotal(cart)).toBe(230)
        expect(stockManager.getStockOfItem('Apple')).toBe(0)
    })

    it('no stock', () => {
        const stockList = [{name: 'Apple', quantity: 0}]
        const stockManager = new StockManager(stockList)
        const till = new Till(stockManager)

        const apples = new Item('Apple', 50, 4)
        cart.addItem(apples)

        expect(till.getTotal(cart)).toBe(0)
        expect(stockManager.getStockOfItem('Apple')).toBe(0)
    })
})
