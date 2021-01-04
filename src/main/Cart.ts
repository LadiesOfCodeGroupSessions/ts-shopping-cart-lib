import {Item} from './Item'

export class Cart {

    private items: Item[] = []

    public addItem(item: Item) {
        this.items.push(item)
    }

    public getTotal() {
        let total = 0

        this.items.forEach((item) => {
            // tslint:disable-next-line:triple-equals
            if (item.name == 'Apple' && item.quantity == 3) {
                total = 130
                item.quantity = 0
        }   if(item.name =='Banana' && item.quantity == 2){
                total = 45
                item.quantity = 0
        }
      })

        return total + this.items.reduce((acc, item) => acc + (item.price * item.quantity), 0)
    }
}
