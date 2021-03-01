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

    public getItems() {
        return this.items;
    }
}
