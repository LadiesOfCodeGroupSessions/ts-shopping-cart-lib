import {Item} from './Item'

export class Cart {
    public specials = new Map()

    private items: Item[] = []

    constructor() {
        this.specials.set('Apple', {quantity: 3, price: 130})
        this.specials.set('Banana', {quantity: 2, price: 45})
    }

    public addItem(item: Item) {
        this.items.push(item)
    }

    public getTotal() {
        let total = 0

        this.items.forEach((item) => {
            if (this.specials.has(item.name)) {
                const special = this.specials.get(item.name)
                if (special.quantity === item.quantity) {
                    total += special.price
                    item.quantity = 0
                }
            }
        })

        return total + this.items.reduce((acc, item) => acc + (item.price * item.quantity), 0)
    }
}
