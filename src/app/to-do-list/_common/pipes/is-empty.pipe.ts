import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isEmpty'
})
export class IsEmptyPipe implements PipeTransform {

  transform(value: string, count: number = 1): string {
    if (!value.trim()) {
      return '-'.repeat(count);
    }
    return value;
  }

}
