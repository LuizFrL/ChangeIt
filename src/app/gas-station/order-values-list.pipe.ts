import { Pipe, PipeTransform } from '@angular/core';
import sortBy from 'sort-by';
import {UserService} from '../core/user/user.service';
import {getDistance} from '../core/utils';

@Pipe({
  name: 'orderValuesList'
})
export class OrderValuesListPipe implements PipeTransform {
  constructor(
    private userService: UserService
  ) {
  }

  transform(values: object[], filter: string, distance: number): object[] {
    if (filter.length && values) {
      return values.filter( items => {
        // @ts-ignore
        return getDistance(this.userService.currentPosition$.getValue(), items.coordinates) < String(distance);
      }).sort(sortBy(filter));
    }
    return values;
  }

}
