import { Component, OnInit } from '@angular/core';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide = true;
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  courriel = "";
  isCourrielValid = false;
  password = "";
  isPasswordValid = false;

  constructor() { }

  ngOnInit(): void {
  }

  courrielChange(event: any): void {
    const regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    if ( regexp.test(this.courriel) ) {
      this.isCourrielValid = true;
    } else {
      this.isCourrielValid = false;
    }
  }

}
