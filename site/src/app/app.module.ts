import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar';
import { SideBarInfoComponent } from './components/sidebarInfo';
import { ProjectsComponent } from './components/projects'; 
import { HomeComponent } from './components/home';

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'projects', component: ProjectsComponent},
  { path: '**', redirectTo: ''}
];
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SideBarInfoComponent,
    ProjectsComponent,
    HomeComponent
  ],
  imports: [

    RouterModule.forRoot(
      appRoutes
    ),
    BrowserModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
