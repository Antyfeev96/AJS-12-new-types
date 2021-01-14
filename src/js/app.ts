import Product from './product';

export default class Cart {
    readonly items: Product[] = [];

    add(item: Product): void {
        this.items.push(item);
    }

    getAll(): Product[] {
        return this.items;
    }
}
