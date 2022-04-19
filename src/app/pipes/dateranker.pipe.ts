import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../car.model';

@Pipe({
  name: 'dateranker'
})
export class DaterankerPipe implements PipeTransform {


  transform(values: Car[], order: string): Car[] {
    if (order === 'DESC') {
      return values.sort((a: Car, b: Car) =>
      (a.issuance === undefined || b.issuance === undefined) ? 1 :
      new Date(b.issuance).getTime() - new Date(a.issuance).getTime());
    } else {
      return values.sort((a: Car, b: Car) =>
      (a.issuance === undefined || b.issuance === undefined) ? -1 :
      new Date(a.issuance).getTime() - new Date(b.issuance).getTime());
    }
  }

}
