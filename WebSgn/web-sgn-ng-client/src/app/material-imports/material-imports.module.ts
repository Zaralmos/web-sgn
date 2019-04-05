import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule, MatInputModule, MatButtonModule, MatFormFieldModule, MatButtonToggleModule } from '@angular/material';
import { DragDropModule } from '@angular/cdk/drag-drop';

const imports = [
  MatIconModule,
  MatInputModule,
  DragDropModule,
  MatButtonModule,
  MatFormFieldModule,
  MatButtonToggleModule,
];
@NgModule({
  imports: imports,
  exports: imports,
})
export class MaterialImportsModule { }
