import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'sanitize'
})
export class SanitizePipe implements PipeTransform {

  constructor(
    private readonly sanitizer: DomSanitizer
  ) { }

  transform(style: string) {
    return this.sanitizer.bypassSecurityTrustStyle(style);
  }

}
