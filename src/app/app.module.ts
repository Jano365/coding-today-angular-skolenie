import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { LayoutModule } from './layout/layout.module';
import { LoginModule } from './login/login.module';
import { ViewsModule } from './views/views.module';
import { HttpClientModule } from '@angular/common/http';
import { FilmsModule } from './films/films.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    LayoutModule,
    LoginModule,
    ViewsModule,
    HttpClientModule,
    FilmsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
