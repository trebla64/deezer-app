import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'thousandsFormatter'
})
export class ThousandsFormatterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
