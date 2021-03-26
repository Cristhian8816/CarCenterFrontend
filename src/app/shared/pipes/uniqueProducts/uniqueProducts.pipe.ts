import { Pipe, PipeTransform } from '@angular/core';
import { Client } from '../../../core/services/models/client.model';

@Pipe({
  name: 'uniqueProducts'
})
export class UniqueProductsPipe implements PipeTransform {

  uniqueProducts: Client[] = [];

  transform(value: Client[]): Client[] {
    return this.uniqueProducts;
  }

}
