import {Item} from './Item'

export class Cart {

    private items: Item[] = []
    private cartId: String

    public addItem(item: Item) {
        this.items.push(item)
    }

    public getItems() {
        return this.items
    }

    public setId(cartId){
      return this.cartId == cartId
    }
}
