export class OrderItem {
    constructor(public id: number, public count: number) {
    }

    toJSON(): any {
        return {
            id: this.id,
            count: this.count
        };
    }
}

export class HistoryOrderItem {
    constructor(public name: string, public count: number) { }
}