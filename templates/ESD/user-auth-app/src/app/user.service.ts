import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: User[] = [];
  private currentUser: User | null = null;

  constructor() {
    this.loadUsers();
    this.loadCurrentUser();
  }

  private loadUsers() {
    const users = localStorage.getItem('users');
    if (users) {
      this.users = JSON.parse(users);
    }
  }

  private saveUsers() {
    localStorage.setItem('users', JSON.stringify(this.users));
  }

  private loadCurrentUser() {
    const user = localStorage.getItem('currentUser');
    if (user) {
      this.currentUser = JSON.parse(user);
    }
  }

  private saveCurrentUser() {
    if (this.currentUser) {
      localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
    } else {
      localStorage.removeItem('currentUser');
    }
  }

  register(user: User) {
    // Check if user already exists
    if (this.users.find(u => u.email === user.email)) {
      throw new Error('User already exists');
    }
    this.users.push(user);
    this.saveUsers();
  }

  login(email: string, password: string): boolean {
    const user = this.users.find(u => u.email === email && u.password === password);
    if (user) {
      this.currentUser = user;
      this.saveCurrentUser();
      return true;
    }
    return false;
  }

  logout() {
    this.currentUser = null;
    this.saveCurrentUser();
  }

  getUser(): User | null {
    return this.currentUser;
  }

  isLoggedIn(): boolean {
    return this.currentUser !== null;
  }
}