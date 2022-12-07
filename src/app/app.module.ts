import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { UserComponent } from './user/user.component';
import { WinnerComponent } from './winner/winner.component';
import { TopperComponent } from './topper/topper.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    UserComponent,
    WinnerComponent,
    TopperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
