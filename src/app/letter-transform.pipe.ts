import { Pipe, PipeTransform } from '@angular/core';
import {Letter} from './letter';

@Pipe({
  name: 'letterTransform'
})
export class LetterTransformPipe implements PipeTransform {

  transform(letter: Letter): string {
    return `${letter.name.toUpperCase()}${letter.name.toLowerCase()}`;
  }

}
