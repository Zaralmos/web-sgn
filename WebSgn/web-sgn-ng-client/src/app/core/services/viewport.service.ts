import { Injectable, EventEmitter } from '@angular/core';
import { WindowSize } from '../models/window-size';
import { ConfigurationService } from './configuration.service';

@Injectable({
  providedIn: 'root'
})
export class ViewportService {

  // TODO: DI for window object
  private readonly _window = window;

  private _size!: WindowSize;

  public get size() {
    return this._size;
  }

  public get desktop(): boolean {
    return this._size.width > 850;
  }

  public get mobile(): boolean {
    return !this.desktop;
  }

  public readonly WindowResized: EventEmitter<WindowSize> = new EventEmitter();

  constructor(
    private readonly config: ConfigurationService
  ) {
    this.updateCurrentSize();
    this._window.addEventListener('resize', (event) => {
      this.updateCurrentSize();
      this.WindowResized.emit(this._size);
    });
  }

  private updateCurrentSize() {
    this._size = new WindowSize(this._window.innerWidth, this._window.innerHeight);
  }
}
