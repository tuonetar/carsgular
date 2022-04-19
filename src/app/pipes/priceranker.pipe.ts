import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { Car } from '../car.model';

@Pipe({
  name: 'priceranker'
})
export class PricerankerPipe implements PipeTransform {
  
  transform(values: Car[], order: string): Car[] {
    if (order === 'DESC') {
      return values.sort((a: Car, b: Car) =>
      (a.price === undefined || b.price === undefined) ? 1 : b.price - a.price);
    } else {
      return values.sort((a: Car, b: Car) =>
      (a.price === undefined || b.price === undefined) ? -1 : a.price - b.price);
    }
  }

}
