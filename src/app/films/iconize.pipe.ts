import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'iconize'
})
export class IconizePipe implements PipeTransform {

  transform(value: boolean): string {
    switch (value) {
      case true:
        return "done"
      case false:
        return "cancel"
      default:
        return "grade";
    }
  }

}
