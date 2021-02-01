import {Cart} from '../main/Cart'
import {Item} from '../main/Item'
import {Till} from '../main/Till'

describe('Till', () => {
    it('get total for items', () => {
        const till = new Till();
        const cart = new Cart();
        const item = new Item('Apple', 50, 1)

        cart.addItem(item)

        const total = till.getTotal(cart);

        expect(total).toBe(50);
    })
})
