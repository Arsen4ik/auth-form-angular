import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  standalone: true,
  imports: [RouterLink],
})
export class ProfileComponent implements OnInit {

  constructor(private AuthService: AuthService) { }

  ngOnInit(): void {
  }

  logOut() {
    this.AuthService.logout()
  }
}
