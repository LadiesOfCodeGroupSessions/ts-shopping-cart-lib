import {Item} from './Item'

export class Cart {

    private specials  = [
        {name: 'Apple', quantity: 3, price: 130},
        {name: 'Banana', quantity: 2, price: 45}
    ]

    private items: Item[] = []

    public addItem(item: Item) {
        this.items.push(item)
    }

    public getTotal() {
        let total = 0

        this.items.forEach((item) => {
            const special = this.specials.find((x) => x.name === item.name)
            if (special) {
                if (special.quantity === item.quantity) {
                    total += special.price
                    item.quantity = 0
                }
            }
        })

        return total + this.items.reduce((acc, item) => acc + (item.price * item.quantity), 0)
    }
}
