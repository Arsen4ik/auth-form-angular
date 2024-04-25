import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
// import { ButtonModule } from 'primeng/button';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  standalone: true,
  imports: [FormsModule, InputTextModule, RouterLink],
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor(private AuthService: AuthService) { }

  ngOnInit(): void {
  }

  login: string = ''
  password: string = ''

  onSubmit() {
    if (!this.login) {
      alert('enter login')
      return
    };
    this.AuthService.login({ username: this.login, password: this.password })
      .subscribe({
        next: () => {
          this.AuthService.setAuth = true
        },
        error: (e) => {
          console.log(e)
          this.AuthService.setAuth = false
        }
      })
  }
}
