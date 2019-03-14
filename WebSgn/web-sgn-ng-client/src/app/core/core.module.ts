import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './services/http.service';
import { ForMobileDirective } from './directives/for-mobile.directive';
import { ForDesktopDirective } from './directives/for-desktop.directive';
import { SanitizePipe } from './pipes/sanitize.pipe';

@NgModule({
  declarations: [ForMobileDirective, ForDesktopDirective, SanitizePipe],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports: [SanitizePipe],
  providers: [HttpService]
})
export class CoreModule { }
