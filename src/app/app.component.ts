import { AuthService } from './services/auth.service';
import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styles: [`
  #navbar > ul li a:hover{
    cursor:pointer;
  }
  `]
})
export class AppComponent {
  name = 'Angular';
  constructor(private auth: AuthService) { }
}
