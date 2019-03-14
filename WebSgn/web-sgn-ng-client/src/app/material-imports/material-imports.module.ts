import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule, MatInputModule } from '@angular/material';

const imports = [
  MatIconModule,
  MatInputModule
];
@NgModule({
  imports: imports,
  exports: imports,
})
export class MaterialImportsModule { }
