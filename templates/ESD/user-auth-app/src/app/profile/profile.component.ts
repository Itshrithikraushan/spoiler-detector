import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: User | null = null;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.user = this.userService.getUser();
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['/login']);
  }
}