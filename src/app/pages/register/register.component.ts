import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name:  [null, [Validators.required]],
      lastname: [null, [Validators.required]],
      birthday: [null, [Validators.required]],
      tel: [null, [Validators.required, Validators.minLength(9)]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(4)]],
      gender: [null]
    });
  }
  registerUser(): void {
    this.authService.postUser();
    this.router.navigate(['/login']).then(() => {
      console.log(this.router.url);
      window.location.reload();
    });
  }
  onSubmit(): void {
    if (this.registerForm.invalid) {
      return;
    }
    console.log(this.registerForm.value);
  }
}
