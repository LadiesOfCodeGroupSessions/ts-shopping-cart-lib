import {Item} from './Item'

export class Cart {

constructor()
{
    let map = new Map();
    map.set("apple",{quantity:3, price:130});
    map.set("banana",{quantity:2, price:45})
   
}
       

    private items: Item[] = []

    public addItem(item: Item) {
        this.items.push(item)
    }

    


    public getTotal() {

    


        let total = 0

        this.items.forEach((item) => {

            Discount discount = discounts.get(x -> x.name == item.name)
            if(item.quantity>= discountQuantity)
                x times in discount quanity
                apply discount.amount

            if (item.name === 'Apple' && item.quantity === 3) {
                total += 130
                item.quantity = 0
            }
            if (item.name === 'Banana' && item.quantity === 2) {
                total += 45
                item.quantity = 0
            }
      })

        return total + this.items.reduce((acc, item) => acc + (item.price * item.quantity), 0)
    }
}
