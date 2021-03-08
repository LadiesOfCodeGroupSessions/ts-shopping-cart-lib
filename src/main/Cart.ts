import {Item} from './Item'

export class Cart {

    private items: Item[] = []

    public addItem(item: Item) {
        this.items.push(item)
    }

    public getItems() {
        return this.items;
    }
}
