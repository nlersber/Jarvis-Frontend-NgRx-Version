import { OrderItem } from './orderItem';
import { Item } from './item';

export class Order {
    private items = new Array<OrderItem>()

    constructor(map: Map<Item, number>) {
        const temp = Array.from(map.entries())
        temp.forEach(s => {
            this.items.push(new OrderItem(s[0].id, s[1]))
        });
    }

    toJSON(): any {
        return {
            items: this.items.map(s => s.toJSON())
        }
    }
}