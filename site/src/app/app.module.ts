import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar';
import { SideBarInfoComponent } from './components/sidebarInfo';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SideBarInfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
