import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(private auth: AngularFireAuth) {}

  inSubmission = false;

  showAlert = false;
  alertMsg = 'Please wait, your account is being Created!';
  alertColor = 'blue';

  name = new FormControl('', [Validators.required, Validators.minLength(3)]);
  email = new FormControl('', [Validators.required, Validators.email]);
  age = new FormControl('', [
    Validators.required,
    Validators.min(13),
    Validators.max(120),
  ]);
  password = new FormControl('', [
    Validators.required,
    Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm),
  ]);
  confirm_password = new FormControl('', [Validators.required]);
  phoneNumber = new FormControl('', [
    Validators.required,
    Validators.minLength(10),
    Validators.maxLength(10),
  ]);

  registerForm = new FormGroup({
    name: this.name,
    email: this.email,
    age: this.age,
    password: this.password,
    confirm_password: this.confirm_password,
    phoneNumber: this.phoneNumber,
  });

  async register() {
    this.showAlert = true;
    this.alertMsg = 'Please wait, your account is being Created!';
    this.alertColor = 'blue';
    this.inSubmission = true;

    const { email, password } = this.registerForm.value;

    // Create account with firebase
    try {
      const userCredentials = await this.auth.createUserWithEmailAndPassword(
        email,
        password
      );
      console.log(userCredentials);
    } catch (e) {
      console.error(e);

      this.alertColor = 'red';
      this.alertMsg = 'An Unexpected Error Occurred, Please Try Again Later.';
      this.inSubmission = false;
      return;
    }

    this.alertColor = 'green';
    this.alertMsg = 'Success! Your Account Has Been Created';
  }
}
