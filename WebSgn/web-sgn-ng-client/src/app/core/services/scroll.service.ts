import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  body = document.querySelector('body');

  public get scrollTop(): number {
    return this.body && this.body.scrollTop || 0;
  }

  public get onTop() {
    return this.scrollTop < 10;
  }

  public readonly scrollTopChanged: EventEmitter<number> = new EventEmitter();

  constructor() {
    console.log(this.body);
    if (this.body) {
      this.body.addEventListener('scroll', () => this.updateScrollTop());
    }
  }

  private updateScrollTop() {
    this.scrollTopChanged.emit(this.scrollTop);
  }
}
