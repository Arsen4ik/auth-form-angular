import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  standalone: true,
  imports: [FormsModule, RouterLink, InputTextModule],
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(private AuthService: AuthService) { }

  ngOnInit(): void {
  }

  login: string = ''
  password: string = ''
  password2: string = ''

  isEmailValid = (): boolean => {
    return /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(this.login)
  }

  isFirstPasswordValid = (): boolean => {
    // console.log(/^(?=.*[A-Z])(?=.*\d).{8,}$/.test(this.password));

    return /^(?=.*[A-Z])(?=.*\d).{8,}$/.test(this.password)
  }
  isSecondPasswordValid = (): boolean => {
    return this.password === this.password2
  }

  public onSubmit() {
    if (!this.isEmailValid()) {
      alert('enter your login')
      return;
    } else if (!this.isFirstPasswordValid()) {
      alert('enter correct password')
      return;
    } else if (!this.isSecondPasswordValid()) {
      alert('second password is incorrect')
      return;
    }
    this.AuthService.register({ username: this.login, email: 'gglol@gmail.com', password: this.password, first_name: 'ars', last_name: 'faz' })
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
