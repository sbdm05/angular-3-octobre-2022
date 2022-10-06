import { Pipe, PipeTransform } from '@angular/core';

// décorateur
@Pipe({
  name: 'total',
})

export class TotalPipe implements PipeTransform {
  transform(i: any, tva?: boolean): number {
    //return null;
    //console.log('déclenché');
    if (tva) return i.totalTTC();
    return i.totalHT();
  }
}
