import {Item} from './Item'

export class Cart {

    private items: Item[] = []
    private id: string

    public addItem(item: Item) {
      const filteredItems = this.items
        .filter( (i) =>  i.name === item.name )

      if (filteredItems.length === 0) {
          this.items.push(item)
          console.log('Added: ', item)
        } else {
          console.log('QUANTITY BEFORE', item.name, filteredItems[0].quantity)
          filteredItems[0].quantity += item.quantity
          console.log('QUANTITY', item.name, filteredItems[0].quantity)
        }
    }

    public getItems() {
        return this.items
    }

    public setId(cartId) {
        this.id = cartId
    }
}
