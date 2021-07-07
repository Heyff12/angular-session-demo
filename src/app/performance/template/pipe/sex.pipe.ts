import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sex',
})
export class SexPipe implements PipeTransform {
  transform(sex: string): string {
    return sex === 'M' ? '男' : '女';
  }
}




