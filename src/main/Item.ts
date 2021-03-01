export class Item {
    public price: number
    public quantity: number
    public name: string

    constructor(name: string, price: number, quantity: number) {
        this.name = name
        this.price = price
        this.quantity = quantity
    }
}
