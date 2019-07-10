export class PriceFilter {
    type: string;
    value: number;//< 3

    constructor(type: string, value: number) {
        this.type = type
        this.value = value
    }

    apply(a: number): boolean {
        if (this.type === 'all')
            return true
        return eval(`${a} ${this.type} ${this.value}`)
    }


}