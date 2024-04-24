import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {httpInterceptorProviders} from './_helpers/http.interceptor';
import {AppRoutingModule} from "./app-routing.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {SharedModule} from "./_shared/shared.module";
import {TranslateModule, TranslateService} from "@ngx-translate/core";
import {BoardModule} from "./board/board.module";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {HomeComponent} from "./home/home.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    BoardModule,
    AppRoutingModule,
    TranslateModule.forRoot({}),
  ],
  providers: [httpInterceptorProviders, TranslateService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

