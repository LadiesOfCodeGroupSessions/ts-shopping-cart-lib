export class Item {
    public itemPrice: number
    private itemName: string

    constructor(name: string, price: number) {
        this.itemName = name;
        this.itemPrice = price;
    }
}
