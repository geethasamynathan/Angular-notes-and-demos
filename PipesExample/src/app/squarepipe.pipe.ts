import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'squarepipe'
})
export class SquarepipePipe implements PipeTransform {

  transform(value: number): number {
    return value*value;
  }

}
