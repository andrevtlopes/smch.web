import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from '../user/user';

@Injectable()
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(true);

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  constructor(
    private router: Router
  ) { }

  login(user: User) {
    if (user.email[0] !== '' && user.password !== '') {
      this.loggedIn.next(true);
      this.router.navigate(['/endereco']);
    }
  }

  logout() {
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }
}
