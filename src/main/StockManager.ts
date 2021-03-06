export interface StockItem {
    name: string
    quantity: number
}

export class StockManager {
    private stockList: StockItem[]

    constructor(stockList: Array<{name: string, quantity: number}>) {
        this.stockList = stockList
    }

    public getStockOfItem(name: string) {
        const item = this.stockList.find((i) => i.name === name)
        return item ? item.quantity : 0
    }

    public reduceStock(name: string, quantity: number) {
        const item = this.stockList.find((i) => i.name === name)

        if (!item) { return }

        item.quantity -= quantity
        if (item.quantity < 0) {
            item.quantity = 0
        }
    }
}
