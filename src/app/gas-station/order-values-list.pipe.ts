import { Pipe, PipeTransform } from '@angular/core';
import { sortBy } from 'sort-by-typescript';

@Pipe({
  name: 'orderValuesList'
})
export class OrderValuesListPipe implements PipeTransform {
  constructor(
  ) {
  }

  transform(values: object[], filter: string): object[] {
    if (filter.length && values) {
      return values.sort(sortBy(filter, 'coordinates.actualUserDistance'));
    }
    return values;
  }

}
