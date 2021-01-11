import {Item} from './Item'

export class Cart {

    private items: Item[] = []

    public addItem(item: Item) {
        this.items.push(item)
    }

{
    name:
    quantity
    price
}

    public getTotal() {

    var map = new Map();
    map.set("apple",{3, 10});
    map.set("banana",20);
    map.set("carrot",30);


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
