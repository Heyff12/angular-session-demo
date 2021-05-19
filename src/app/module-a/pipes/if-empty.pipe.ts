import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ifEmpty'
})
export class IfEmptyPipe implements PipeTransform {

  transform(value: any, placeholder: string = '-'): string {
    if (value || value === 0) {
      return value;
    }
    return placeholder;
  }
}
