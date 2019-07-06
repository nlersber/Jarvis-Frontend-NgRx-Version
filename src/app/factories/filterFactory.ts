import { Filter } from '../models/filter';
import { PriceFilter } from '../models/priceFilter';
import { FilterType } from '../models/FilterType';

export function createFilter(filterType: FilterType, type: string, value: number): Filter {
    switch (filterType) {
        case FilterType.PRICE:
            return new PriceFilter(type, value)
        default:
            return null
    }
}