import { Component } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  loginForm: FormGroup;
  formInvalid = false;

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      id: ['', Validators.required],
      motDePasse: ['', Validators.required],
    });
  }


  onSubmit(): void {
    if (this.loginForm.valid) {
      console.log('Formulaire :', this.loginForm.value);
    } else {
      this.formInvalid = true;
    }
  }
}
