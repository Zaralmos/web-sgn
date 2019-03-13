import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material';

const imports = [
  MatIconModule,
];
@NgModule({
  imports: imports,
  exports: imports,
})
export class MaterialImportsModule { }
