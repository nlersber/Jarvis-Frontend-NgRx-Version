import { FilterType } from './FilterType';

export interface Filter{//FilterState
    type: string
    value: number
    filterType: FilterType
}

//Selector gebruiken
//Pipe op @Input <<<
