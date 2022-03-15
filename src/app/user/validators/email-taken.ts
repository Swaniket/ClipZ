import { Injectable } from '@angular/core';
import {
  AsyncValidator,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';

import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root',
})
export class EmailTaken implements AsyncValidator {
  constructor(private auth: AngularFireAuth) {}

  validate = (control: AbstractControl): Promise<ValidationErrors | null> => {
    return this.auth
      .fetchSignInMethodsForEmail(control.value)
      .then((response) => (response.length ? { emailTaken: true } : null));
  };
}
