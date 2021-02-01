import {Cart} from './Cart'
import {Item} from './Item'

export class Till{
    public getTotal(cart: Cart){
        return this.getTotalInCart(cart.items);
    }

    private getTotalInCart(items: Item[]) {
        let total = 0

        items.forEach((item) => {
            const special = this.specials.find((x) => x.name === item.name)
            if (special) {
                if (item.quantity >= special.quantity) {
                    const numberOfSpecials = Math.floor(item.quantity / special.quantity)
                    total += special.price * numberOfSpecials
                    item.quantity -= special.quantity * numberOfSpecials
                }
            }
        })

        return total + this.items.reduce((acc, item) => acc + (item.price * item.quantity), 0)
    }
}
