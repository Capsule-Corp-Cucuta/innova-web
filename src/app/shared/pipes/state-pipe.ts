import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'State',
})
export class StatePipe implements PipeTransform {
  public transform(value: boolean): unknown {
    switch (value) {
      case true:
        return 'Activo';
      case false:
        return 'Inactivo';
    }
  }
}