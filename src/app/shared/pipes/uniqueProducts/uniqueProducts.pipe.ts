import { Pipe, PipeTransform } from '@angular/core';
import { Patient } from '../../../core/services/models/patient.model';

@Pipe({
  name: 'uniqueProducts'
})
export class UniqueProductsPipe implements PipeTransform {

  uniqueProducts: Patient[] = [];

  transform(value: Patient[]): Patient[] {
    return this.uniqueProducts;
  }

}
