import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  password;
  username;
  showSpinner;
  constructor(public router: Router) { this.showSpinner = true; }

  ngOnInit() {
  }

  login() {
    this.router.navigate(['/home']);
    console.log(this.username);
    console.log(this.password);

  }
}
