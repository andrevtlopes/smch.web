import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly API = 'http://localhost/user';

  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<User>(this.API);
  }

  getResponsibles() {
    return this.list();
  }

  getUserById(id: number) {
    return this.http.get<User>(this.API + '/' + id);
  }

}
