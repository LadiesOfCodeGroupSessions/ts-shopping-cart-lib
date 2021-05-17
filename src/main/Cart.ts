import {Item} from './Item'

export class Cart {

    private items: Item[] = []
    private cartId: String

    public addItem(item: Item) {
      let filtered_items = this.items
        .filter( i => { i.name = item.name })
  
        if (filtered_items.length = 0){
          this.items.push(item)
        } else
        {
          console.log("QUANTITY", filtered_items[0].quantity)
        }
    }

    public getItems() {
        return this.items
    }

    public setId(cartId){
      return this.cartId == cartId
    }
}
