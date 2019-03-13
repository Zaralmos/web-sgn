import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { MaterialImportsModule } from '../material-imports/material-imports.module';

@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    MaterialImportsModule,
  ],
  exports: [MenuComponent],
})
export class MenuModule { }
