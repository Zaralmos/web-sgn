import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './services/http.service';
import { ForMobileDirective } from './directives/for-mobile.directive';
import { ForDesktopDirective } from './directives/for-desktop.directive';

@NgModule({
  declarations: [ForMobileDirective, ForDesktopDirective],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [HttpService]
})
export class CoreModule { }
