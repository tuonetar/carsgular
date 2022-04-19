import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'rxjs';
import { Car } from '../car.model';

@Pipe({
  name: 'pricefilter'
})
export class PricefilterPipe implements PipeTransform {

  transform(values: Car[], min: number, max: number): Car[] {
    console.log("PPEEEEEE")
    if (max < min)
      return values;
    return values.filter(
      c =>  (c.price === undefined) ? false : (c.price >= min && c.price <= max)
    );
  }

}
