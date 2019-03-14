import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuModule } from '../menu/menu.module';
import { HomeModule } from '../home/home.module';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryWebApiService } from '../shared/mocks/in-memory-web-api.service';
import { SearchModule } from '../search/search.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MenuModule,
    SearchModule,
    HomeModule,

    AppRoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryWebApiService),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
