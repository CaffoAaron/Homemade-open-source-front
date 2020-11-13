import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-menbresia-datos',
  templateUrl: './menbresia-datos.component.html',
  styleUrls: ['./menbresia-datos.component.css']
})
export class MenbresiaDatosComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    console.log('email=' + this.f.email.value);
    console.log('username=' + this.f.username.value);
    console.log('password=' + this.f.password.value);
  }
}
