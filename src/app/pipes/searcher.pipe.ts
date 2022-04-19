import { Pipe, PipeTransform } from '@angular/core';
import { FaStackItemSizeDirective } from '@fortawesome/angular-fontawesome';
import { Car } from '../car.model';

@Pipe({
  name: 'searcher'
})
export class SearcherPipe implements PipeTransform {

  transform(values: Car[], clue: string): Car[] {
    clue = clue.toLocaleLowerCase();
    console.log(clue.match(""));
    if (clue === undefined || clue == null ||clue.length == 0)
      return values;
    return values.filter(c =>
      (c.title === undefined) ? false :
      c.title.toLocaleLowerCase().includes(clue)
    );
  }

}
