import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringToIcon',
})
export class StringToIconPipe implements PipeTransform {
  transform(value: string) {
    switch (value) {
      case 'ACTIVE':
        return 'pi-check-circle';
      case 'PENDING':
        return 'pi-times-circle';
        break;
      case 'INACTIVE':
        return 'pi-info-circle';
        break;
      case 'NOT_AVAILABLE':
        return 'pi-minus';
        break;
      default:
        return '';
        break;
    }
  }
}
