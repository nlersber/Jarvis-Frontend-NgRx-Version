export class OrderItem {
    private _id: number
    private _count: number

    constructor(id: number, count: number) {
        this._id = id
        this._count = count
    }

    toJSON(): any {
        return {
            id: this._id,
            count: this._count
        };
    }
}