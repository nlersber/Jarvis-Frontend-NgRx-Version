export class PriceFilter {

    constructor(public readonly type: string, public readonly value: number) { }

    apply(a: number): boolean {
        return (this.type === 'all') ? true : eval(`${a} ${this.type} ${this.value}`)
    }


}