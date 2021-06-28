import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender',
  pure: true,
})
export class GenderPipe implements PipeTransform {
  transform(value: string): string {
    console.log('GenderPipe:', value);
    if (value === 'M') { return '男'; }
    if (value === 'W') { return  '女'; }
    return '';
  }
}




