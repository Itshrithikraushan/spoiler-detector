import { Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private userService: UserService) {}

  login(email: string, password: string): boolean {
    return this.userService.login(email, password);
  }

  logout() {
    this.userService.logout();
  }

  isLoggedIn(): boolean {
    return this.userService.isLoggedIn();
  }
}
