export class StockManager {
    private stockList: {name: string, quantity: number}[]

    constructor(stockList:  {name: string, quantity: number}[]) {
        this.stockList = stockList
    }

    public getStockOfItem(name: string) {
        let item = this.stockList.find((item) => item.name === name)
        return item ? item.quantity : 0        
    }


}
