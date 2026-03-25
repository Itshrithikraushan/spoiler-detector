import { TestBed } from '@angular/core/testing';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
    localStorage.clear();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should register and retrieve current user after login', () => {
    const user = { name: 'Test', email: 'test@example.com', password: 'pass' };
    service.register(user);
    expect(service.login(user.email, user.password)).toBe(true);
    const stored = service.getUser();
    expect(stored).toEqual(user);
  });
});