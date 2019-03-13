import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  public transparentAtTop = true;

  public mobileOpened = false;

  constructor() { }

}
