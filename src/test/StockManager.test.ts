import { Item } from '../main/Item'
import { StockManager } from '../main/StockManager'

describe('Stock Manager', () => {
  it('reduce stock', () => {
    const stockList = [
      {name: 'Apple', quantity: 10}
    ]

    const stockManager = new StockManager(stockList)
    expect(stockManager.getStockOfItem('Apple')).toBe(10)

    stockManager.reduceStock('Apple', 5)

    expect(stockManager.getStockOfItem('Apple')).toBe(5)
  })
})
