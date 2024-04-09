import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  standalone: true,
  imports: [FormsModule, RouterLink, InputTextModule],
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  email: string = ''
}
