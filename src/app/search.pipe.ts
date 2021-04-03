import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(cars, value) {
    console.log(value);
    
    return cars.filter((p) => {
      return p.name.includes(value);
    });
  }

}
