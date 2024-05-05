import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
isLogin!:false
  constructor(private router:Router) { }

  login(username: string, password: string): boolean {
    if (username === 'admin' && password === 'admin') {
      localStorage.setItem('currentUser', JSON.stringify({ username }));
      return true;
    } else {
      return false;
    }

  }

  logout(): void {
    localStorage.removeItem('currentUser');
this.router.navigate(['/'])
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('currentUser');
  }
}
