import { OrderItem, HistoryOrderItem } from './orderItem';
import { Item } from './item';

export class Order {
    items = new Array<OrderItem>()
    date: string

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

export class HistoryOrder {
    constructor(public items: HistoryOrderItem[], public date: string) { }
}