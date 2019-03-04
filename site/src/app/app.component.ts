import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './bootstrap.min.css',
    './app.component.css'
  ]
})
export class AppComponent {
  title = 'Jayson Armbruster';

  constructor(public router: Router){
    console.log(this.router.url);
  }
}
