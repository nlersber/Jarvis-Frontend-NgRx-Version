export class Item {

    private _imgSrc: string

    /**
     *
     */
    constructor(
        private _id: number,
        private _name: string,
        private _price: number,
        private _type: number,
        private _count: number,
    ) {
        this._imgSrc = "assets/img/" + this.name.replace(" ", "_").toLowerCase() + ".png";
    }

    get id(): number {
        return this._id;
    }
    get name(): string {
        return this._name;
    }

    get price(): number {
        return this._price;
    }

    get type(): number {
        return this._type;
    }

    get count(): number {
        return this._count;
    }

    get imgSrc(): string {
        return this._imgSrc;
    }

    subtractCount(num: number) {
        this._count -= num;
    }



    static fromJson(json: any): Item {
        const item = new Item(
            json.id,
            json.name,
            json.price,
            json.type,
            json.count
        );
        return item;
    }
}