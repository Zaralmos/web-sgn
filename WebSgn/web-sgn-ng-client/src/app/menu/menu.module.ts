import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { MaterialImportsModule } from '../material-imports/material-imports.module';
import { BasicDropdownComponent } from './components/basic-dropdown/basic-dropdown.component';
import { NewsDropdownComponent } from './components/news-dropdown/news-dropdown.component';
import { SearchDropdownComponent } from './components/search-dropdown/search-dropdown.component';

@NgModule({
  declarations: [MenuComponent, BasicDropdownComponent, NewsDropdownComponent, SearchDropdownComponent],
  imports: [
    CommonModule,
    MaterialImportsModule,
  ],
  exports: [MenuComponent],
})
export class MenuModule { }
