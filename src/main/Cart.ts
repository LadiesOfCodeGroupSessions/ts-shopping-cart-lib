import {Item} from './Item'

export class Cart {

    private items: Item[] = [];

    public addItem(item: Item, amount: number) {
        this.items.push(item)
    }

    public getTotal() {
        return this.items.reduce((acc, item) => acc + item.itemPrice, 0)
    }
}
