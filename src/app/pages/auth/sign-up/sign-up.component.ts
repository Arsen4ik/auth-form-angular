import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  standalone: true,
  imports: [FormsModule, RouterLink, InputTextModule],
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor() { }

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
}
