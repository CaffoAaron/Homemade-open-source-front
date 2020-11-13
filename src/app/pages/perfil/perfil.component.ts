import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {HomemadeApiService} from '../../services/homemade-api.service';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  submitted2 = false;
  submitted3 = false;
  supmited4 = false;
  users: Array<any>;
  usersUpdate: Array<any>;


  constructor(private formBuilder: FormBuilder, private homemadeApi: HomemadeApiService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      date: ['', Validators.required]
    });
    this.homemadeApi.getUserchef().subscribe(data => this.users = data);
  }
  onUpdateUserChef(): void{
    this.homemadeApi.updateHero();
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
