import { OrderItem, HistoryOrderItem } from './orderItem';
import { Item } from './item';
import { DatePipe } from '@angular/common';

export class Order {
    items = new Array<OrderItem>()

    constructor(map: Map<Item, number>, public user: string, public date: string) {
        const temp = Array.from(map.entries())
        temp.forEach(s => {
            this.items.push(new OrderItem(s[0].id, s[1]))
        });

    }
}

export class HistoryOrder {
    constructor(public items: HistoryOrderItem[], public date: string) { }
}