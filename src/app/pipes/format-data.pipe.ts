import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatData',
})
export class FormatDataPipe implements PipeTransform {
  transform(value: any, start?: any, end?: any): any {
    console.log(start);
    console.log(end);
    return value.substr(0, 10) + '...';
  }
}
