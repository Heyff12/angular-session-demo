import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatTelephone',
})
export class FormatTelephonePipe implements PipeTransform {
  transform(phoneNumber: string): string {
    if (phoneNumber.length >= 11) {
      return phoneNumber.substr(0, 11);
    }
    return phoneNumber.padEnd(11, '0');
  }
}




