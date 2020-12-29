import { Pipe, PipeTransform } from '@angular/core';
import sortBy from 'sort-by';

@Pipe({
  name: 'orderValuesList'
})
export class OrderValuesListPipe implements PipeTransform {

  transform(values: object[], filter: string): object[] {
    if (filter.length && values) {
      return values.sort(sortBy(filter));
    }
    return values;
  }

}
