import { Filter } from './filter';
import { FilterType } from './FilterType';

export class PriceFilter implements Filter {
    filterType: FilterType= FilterType.PRICE
    type: string;
    value: number;

    apply(a: number): boolean {
        return eval(`${a} ${this.type} ${this.value}`)
    }

    constructor(type: string, value: number) {
        this.type = type
        this.value = value
    }
}