import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  rememberMe: boolean = false;

  constructor(private authService: AuthService, private router: Router) {
    const savedUsername = localStorage.getItem('username');
    const savedPassword = localStorage.getItem('password');
    if (savedUsername && savedPassword) {
      this.username = savedUsername;
      this.password = savedPassword;
      this.rememberMe = true;
    }
  }

  login(): void {
    if (this.authService.login(this.username, this.password)) {
      if (this.rememberMe) {
        localStorage.setItem('username', this.username);
        localStorage.setItem('password', this.password);
      } else {
        localStorage.removeItem('username');
        localStorage.removeItem('password');
      }
      this.router.navigate(['/dashboard']);
    } else {
      alert('Invalid credentials. Please try again.');
    }
  }
}
