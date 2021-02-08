import {Cart} from './Cart'
import {Item} from './Item'
import {StockManager} from './StockManager'

export class Till {

    private specials  = [
        {name: 'Apple', quantity: 3, price: 130},
        {name: 'Banana', quantity: 2, price: 45}
    ]
    private stockManager: StockManager

    constructor(stockManager: StockManager) {
        this.stockManager = stockManager
    }
    public getTotal(cart: Cart) {
        return this.getTotalInCart(cart.getItems())
    }

    private getTotalInCart(items: Item[]) {
        let total = 0

        items.forEach((item) => {
            const stockQuantity = this.stockManager.getStockOfItem(item.name)

            if (stockQuantity < item.quantity) {
                item.quantity = stockQuantity
            }

            if (stockQuantity >= item.quantity) {
                this.stockManager.reduceStock(item.name, item.quantity)
                total += this.applySpecial(item)
                total += item.price * item.quantity
            }
        })

        return total
    }

    private applySpecial(item: Item) {
        let itemTotal = 0

        const special = this.specials.find((x) => x.name === item.name)
        if (special) {
            if (item.quantity >= special.quantity) {
                const numberOfSpecials = Math.floor(item.quantity / special.quantity)
                itemTotal += special.price * numberOfSpecials
                item.quantity -= special.quantity * numberOfSpecials
            }
        }
        return itemTotal
    }
}
