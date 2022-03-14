import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  showAlert = false;
  alertMessage = 'Please Wait! We are logging you in.';
  alertColor = 'blue';
  inSubmission = false;

  credentials = {
    email: '',
    password: '',
  };

  constructor(private auth: AngularFireAuth) {}

  ngOnInit(): void {}

  async login() {
    this.showAlert = true;
    this.alertMessage = 'Please Wait! We are logging you in.';
    this.alertColor = 'blue';
    this.inSubmission = true;

    try {
      await this.auth.signInWithEmailAndPassword(
        this.credentials.email,
        this.credentials.password
      );
    } catch (e) {
      this.inSubmission = false;
      this.alertMessage =
        'An Unexpected Error Occurred. Please Try Again Later.';
      this.alertColor = 'red';

      console.log(e);

      return;
    }

    this.alertMessage = 'Success! You are now logged in.';
    this.alertColor = 'green';
  }
}
