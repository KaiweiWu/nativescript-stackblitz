import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'sign-in',
  templateUrl: './signin.component.html',
})
export class SignInComponent implements OnInit {
  signInForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  constructor() {}

  ngOnInit(): void {
    console.log('hi');
  }

  onSubmit(): void {
    console.log('Signed in action');
  }
}
