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

  it('do not reduce stock beyond 0', () => {
    const stockList = [
      {name: 'Apple', quantity: 4}
    ]

    const stockManager = new StockManager(stockList)
    expect(stockManager.getStockOfItem('Apple')).toBe(4)

    stockManager.reduceStock('Apple', 5)

    expect(stockManager.getStockOfItem('Apple')).toBe(0)
  })

  it('do not reduce stock of non-existent item', () => {
    const stockList = [
      {name: 'Apple', quantity: 4}
    ]

    const stockManager = new StockManager(stockList)
    stockManager.reduceStock('HairDryer', 1)

    expect(stockManager.getStockOfItem('Apple')).toBe(4)
  })
})
