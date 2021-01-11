import {Item} from './Item'

export class Cart {
  specials = new Map()

    constructor()
    {
        this.specials.set("Apple", {quantity:3, price:130})
        this.specials.set("Banana", {quantity:2, price:45})   
    }

    private items: Item[] = []

    public addItem(item: Item) {
        this.items.push(item)
    }

    public getTotal() {

        let total = 0

        this.items.forEach((item) => {
            if (this.specials.has('Apple')) {
                return this.specials.get('Apple').price
            }
      })

        return total + this.items.reduce((acc, item) => acc + (item.price * item.quantity), 0)
    }
}
