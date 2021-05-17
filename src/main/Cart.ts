import {Item} from './Item'

export class Cart {

    private items: Item[] = []
    private id: string

    public addItem(item: Item) {
        this.items.push(item)
    }

    public getItems() {
        return this.items
    }

    public setId(cartId) {
        this.id = cartId
    }
}
