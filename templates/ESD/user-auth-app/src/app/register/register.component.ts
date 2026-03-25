import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  user: User = { name: '', email: '', password: '' };

  constructor(private userService: UserService, private router: Router) {}

  register() {
    try {
      this.userService.register(this.user);
      alert('Registration Successful');
      this.router.navigate(['/login']);
    } catch (error: any) {
      alert(error.message);
    }
  }
}