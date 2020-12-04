import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByRegion'
})
export class FilterByRegionPipe implements PipeTransform {

  transform(regions: string[], descriptionQuery: string): string[] {
    descriptionQuery = descriptionQuery.trim().toLowerCase();
    if (descriptionQuery){
      return regions.filter( region => region.toLowerCase().includes(descriptionQuery)).sort();
    }
    return regions.sort();
  }

}
