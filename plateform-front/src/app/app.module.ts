import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {httpInterceptorProviders} from './_helpers/http.interceptor';
import {AppRoutingModule} from "./app-routing.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {SharedModule} from "./_shared/shared.module";
import {TranslateModule, TranslateService} from "@ngx-translate/core";
import {BoardModule} from "./board/board.module";
import {ForgotPasswordComponent} from "./forgot-password/forgot-password.component";
import {ResetPasswordComponent} from './reset-password/reset-password.component';
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {HomeComponent} from "./home/home.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
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

