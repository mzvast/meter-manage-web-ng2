import { AuthService } from './core/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  constructor(private authService: AuthService) {}
  logout() {
    this.authService.logout();
  }

}
